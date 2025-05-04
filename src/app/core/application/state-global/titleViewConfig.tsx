import HomeSectionConfiguration from "@/ui/organisms/HomeSectionConfiguration";
import { create } from "zustand";

interface ITitleViewConfig {
  titleView: string;
  section: React.ReactNode;
}
interface ITitleViewConfigState {
  titleViewConfig: ITitleViewConfig;
  setTitleViewConfig: (value: ITitleViewConfig) => void;
}

export const useTitleViewConfig = create<ITitleViewConfigState>((set) => ({
  titleViewConfig: {
    titleView: "Home",
    section: (
      <HomeSectionConfiguration name="Jose Cardona" name_device="Aspire" />
    ),
  },
  setTitleViewConfig: (value) =>
    set((state) => ({ ...state, titleViewConfig: value })),
}));
