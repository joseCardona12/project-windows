import { DATA_IMAGE } from "@/utils/constants/dataImage";
import { create } from "zustand";

interface IDesktopBackground {
  desktopBackground: string;
  setDesktopBackground: (value: string) => void;
}

export const useDesktopBackground = create<IDesktopBackground>((set) => ({
  desktopBackground: DATA_IMAGE[0].url,
  setDesktopBackground: (value) =>
    set((state) => ({ ...state, desktopBackground: value })),
}));
