import { ISection } from "@/interfaces/section";
import { create } from "zustand";

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
