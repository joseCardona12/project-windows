import { IView } from "@/interfaces/view";
import { create } from "zustand";

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
