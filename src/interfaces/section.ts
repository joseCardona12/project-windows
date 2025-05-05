import { ReactElement } from "react";

export interface ISection {
  name: string;
  section: React.ReactNode;
  icon?: ReactElement;
}
