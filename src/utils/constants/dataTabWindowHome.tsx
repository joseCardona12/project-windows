import { ITabWindowHome } from "@/interfaces/tabWindowHome";
import {
  IconBag,
  IconClock,
  IconConfig,
  IconEdge,
  IconNotePad,
  IconPhoto,
} from "../../../public/icons";
import NotePadSection from "@/ui/organisms/window/NotepadSection";

export const DATA_TAB_WINDOW_HOME: ITabWindowHome[] = [
  {
    name: "Edge",
    icon: <IconEdge />,
    sectionModal: <>divssss</>,
  },
  {
    name: "Images",
    icon: <IconPhoto />,
    sectionModal: <>divssss</>,
  },
  {
    name: "Configuration",
    icon: <IconConfig />,
    sectionModal: <>divssss</>,
  },
  {
    name: "Store",
    icon: <IconBag />,
    sectionModal: <>divssss</>,
  },
  {
    name: "Clock",
    icon: <IconClock />,
    sectionModal: <>divssss</>,
  },
  {
    name: "NotePad",
    icon: <IconNotePad />,
    sectionModal: <NotePadSection />,
  },
];
