import { create } from "zustand";

interface IModalShowRightClick {
  openModalShowRightClick: boolean;
  setOpenModalShowRightClick: (value: boolean) => void;
}

export const useOpenModalShowRightClick = create<IModalShowRightClick>(
  (set) => ({
    openModalShowRightClick: false,
    setOpenModalShowRightClick: (value) =>
      set((state) => ({ ...state, openModalShowRightClick: value })),
  })
);
