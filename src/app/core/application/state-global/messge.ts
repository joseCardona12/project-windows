import { create } from "zustand";

interface IMessage {
  title?: string;
  description: string;
  variant: "error" | "success";
  state: boolean;
}

interface IMessageState {
  message: IMessage;
  setMessage: (value: IMessage) => void;
}

export const useMessage = create<IMessageState>((set) => ({
  message: {
    title: "",
    description: "",
    variant: "success",
    state: false,
  },
  setMessage: (value) => set((state) => ({ ...state, message: value })),
}));
