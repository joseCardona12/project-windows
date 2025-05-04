import { create } from "zustand";

interface IModalSmall {
  state: boolean;
  children: React.ReactNode;
  position?: { x: number; y: number };
  positionPercent?: { x: string; y: string };
  isBottom?: boolean;
  width?: string;
  height?: string;
  transform?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
}

interface IModalSmallState {
  modalSmall: IModalSmall;
  setModalSmall: (value: IModalSmall) => void;
}

export const useModalSmall = create<IModalSmallState>((set) => ({
  modalSmall: {
    state: false,
    children: <></>,
  },
  setModalSmall: (value) => set((state) => ({ ...state, modalSmall: value })),
}));
