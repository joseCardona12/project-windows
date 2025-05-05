import { ISection } from "@/interfaces/section";
import { IView } from "@/interfaces/view";
import { DATA_COMMAND } from "@/utils/constants/command";
import { useEffect, useRef, useState } from "react";
import { IconCloud, IconDesktop } from "../../public/icons";
import DesktopSection from "@/ui/organisms/files/DesktopSection";
import CloudSection from "@/ui/organisms/files/cloud/CloudSection";
import { DATA_COMMAND_KEY } from "@/utils/constants/dataCommands";

interface IUseTerminalProps {
  setOpenModalWindow: (value: boolean) => void;
  openModalWindow: boolean;
  setStateView: (value: IView) => void;
  setStateSection: (value: ISection) => void;
}
export default function UseTerminal({
  setOpenModalWindow,
  openModalWindow,
  setStateSection,
  setStateView,
}: IUseTerminalProps) {
  const [commandLines, setCommandLines] = useState<string[]>([""]);
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [errors, setErrors] = useState<boolean[]>([false]);
  const [outputs, setOutputs] = useState<string[]>([""]);

  useEffect(() => {
    const lastInput = inputRefs.current[inputRefs.current.length - 1];
    if (lastInput) lastInput.focus();
  }, [commandLines.length]);

  const handleInputChange = (index: number, value: string) => {
    const newCommands = [...commandLines];
    newCommands[index] = value;
    setCommandLines(newCommands);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = commandLines[index].trim();

      const isValid = DATA_COMMAND.includes(value);
      const updatedErrors = [...errors];
      updatedErrors[index] = !isValid;
      setErrors(updatedErrors);

      const updatedOutputs = [...outputs];
      if (value === "list") {
        updatedOutputs[index] = `Available commands: ${DATA_COMMAND.join(
          ", "
        )}`;
      } else if (!isValid) {
        updatedOutputs[index] = `The command "${value}" is not recognized.`;
      } else {
        updatedOutputs[index] = "";
      }
      console.log("value", value);
      if (value === "clear") {
        console.log("clear");
        handleClear();
        return;
      }

      if (value === "open desktop") {
        setOpenModalWindow(!openModalWindow);
        setStateSection({
          name: "Desktop",
          section: <DesktopSection />,
        });
        setStateView({
          view: "Desktop",
          icon: <IconDesktop />,
        });
      }

      DATA_COMMAND_KEY.forEach((item) => {
        // Verify command view desktop and subview...
        if (item.command === value) {
          setOpenModalWindow(true);
          setStateSection({
            name: item.name,
            section: item.section,
          });
          setStateView({
            view: item.name,
            icon: item.icon,
          });
        }
      });

      if (value !== "") {
        setCommandLines([...commandLines, ""]);
        setErrors([...updatedErrors, false]);
        setOutputs([...updatedOutputs, ""]);
        setFocusIndex(commandLines.length);
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusIndex(index);
  };
  const handleClear = () => {
    setCommandLines([""]);
    setErrors([]);
    setFocusIndex(0);
    setOutputs([""]);
  };

  return {
    handleInputChange,
    handleKeyDown,
    commandLines,
    inputRefs,
    handleFocus,
    focusIndex,
    errors,
    handleClear,
    outputs,
  };
}
