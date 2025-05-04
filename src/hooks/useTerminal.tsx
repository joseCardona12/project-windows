import { DATA_COMMAND } from "@/utils/constants/command";
import { useEffect, useRef, useState } from "react";

export default function UseTerminal() {
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
