import { ReactElement } from "react";
import { create } from "zustand";

interface ISection {
  name: string;
  section: React.ReactNode;
  icon?: ReactElement;
}
interface ISectionState {
  stateSection: ISection;
  setStateSection: (value: ISection) => void;
}

export const useSection = create<ISectionState>((set) => ({
  stateSection: {
    name: "",
    section: <></>,
    icon: <></>,
  },
  setStateSection: (value) =>
    set((state) => ({ ...state, stateSection: value })),
}));
