import { create } from "zustand";

interface IModalWindow {
  openModalWindow: boolean;
  setOpenModalWindow: (value: boolean) => void;
}

export const useOpenModalWindow = create<IModalWindow>((set) => ({
  openModalWindow: false,
  setOpenModalWindow: (value) =>
    set((state) => ({ ...state, openModalWindow: value })),
}));
