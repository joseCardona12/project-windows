import { ReactElement } from "react";
import { create } from "zustand";

interface IView {
  view: string;
  icon: ReactElement;
}
interface IViewState {
  stateView: IView;
  setStateView: (value: IView) => void;
}

export const useView = create<IViewState>((set) => ({
  stateView: {
    view: "",
    icon: <></>,
  },
  setStateView: (value) => set((state) => ({ ...state, stateView: value })),
}));
