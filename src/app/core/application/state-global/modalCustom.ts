import { create } from "zustand";

export interface IModalCustom {
  nameIcon: string;
  state: boolean;
  section?: React.ReactNode;
}

interface IModalCustomState {
  openModalCustom: IModalCustom;
  setOpenModalCustom: (value: IModalCustom) => void;
}

export const useOpenModalCustom = create<IModalCustomState>((set) => ({
  openModalCustom: {
    nameIcon: "",
    state: false,
  },
  setOpenModalCustom: (value) =>
    set((state) => ({ ...state, openModalCustom: value })),
}));
