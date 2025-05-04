interface IActive {
  name: string;
  state: boolean;
}
export interface IActiveIcon {
  window: IActive;
  language: IActive;
  wifi: IActive;
  arrow: IActive;
  terminal: IActive;
}
