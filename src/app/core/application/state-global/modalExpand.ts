import { create } from "zustand";

interface IModalExpand {
  openModalExpand: boolean;
  setOpenModalExpand: (value: boolean) => void;
}

export const useOpenModalExpand = create<IModalExpand>((set) => ({
  openModalExpand: false,
  setOpenModalExpand: (value) =>
    set((state) => ({ ...state, openModalExpand: value })),
}));
