import { IFile } from "@/interfaces/files";
import { FILES } from "@/utils/constants/files";
import { create } from "zustand";

interface IFileState {
  fileState: IFile[];
  setFileState: (value: IFile[]) => void;
}

export const useFileState = create<IFileState>((set) => ({
  fileState: FILES,
  setFileState: (value) => set((state) => ({ ...state, fileState: value })),
}));
