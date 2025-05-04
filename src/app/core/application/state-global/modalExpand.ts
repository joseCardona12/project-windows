import { create } from "zustand";

interface IModalExpand {
  openModalExpand: boolean;
  openModalWindow: boolean;
  setOpenModalWindow: (value: boolean) => void;
  setOpenModalExpand: (value: boolean) => void;
}

export const useOpenModalExpand = create<IModalExpand>((set) => ({
  openModalExpand: false,
  openModalWindow: false,
  setOpenModalWindow: (value) =>
    set((state) => ({ ...state, openModalWindow: value })),
  setOpenModalExpand: (value) =>
    set((state) => ({ ...state, openModalExpand: value })),
}));
