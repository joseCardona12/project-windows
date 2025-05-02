import { IModalClickRightData } from "@/interfaces/ModalClickRightData";
import { IconArrowSort, IconEye, IconReload } from "../../../public/icons";

export const DATA_MODAL_CLICK_RIGHT: IModalClickRightData[] = [
  {
    text: "Show",
    icon: <IconEye />,
    key: "show",
    isIconRight: true,
    isBorderBottom: false,
  },
  {
    text: "Sort",
    icon: <IconArrowSort />,
    key: "sort",
    isIconRight: true,
    isBorderBottom: false,
  },
  {
    text: "Update",
    icon: <IconReload />,
    key: "update",
    isIconRight: false,
    isBorderBottom: true,
  },
  {
    text: "New",
    icon: <></>,
    key: "new",
    isIconRight: true,
    isBorderBottom: false,
  },
  {
    text: "Display Config",
    icon: <></>,
    key: "display_config",
    isIconRight: false,
    isBorderBottom: false,
  },
  {
    text: "Custom",
    icon: <></>,
    key: "custom",
    isIconRight: false,
    isBorderBottom: false,
  },
  {
    text: "Open in Terminal",
    icon: <></>,
    key: "terminal",
    isIconRight: false,
    isBorderBottom: false,
  },
];
