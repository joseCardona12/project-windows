import { ReactElement } from "react";

export interface ICommand {
  value: string;
  state: boolean;
}

export interface ICommandKey {
  name: string;
  icon: ReactElement;
  section: React.ReactNode;
  command: string;
}
