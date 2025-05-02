import { ReactElement } from "react";

export interface ITabMenuData {
  icon: ReactElement;
  text: string;
  isPin?: boolean;
  section: React.ReactNode;
}
