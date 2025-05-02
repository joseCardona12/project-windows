"use client";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import { useOpenModalExpand } from "@/app/core/application/state-global/modalExpand";
import TabOptions from "./TabOptions";
import TabMenu from "./TabMenu";
import ActiveShowData from "../molecules/ActiveShowData";

interface IModalProps {
  section: React.ReactNode;
}
export default function Modal({ section }: IModalProps): React.ReactNode {
  const { openModalWindow } = useOpenModalWindow((state) => state);
  const { openModalExpand } = useOpenModalExpand((state) => state);
  return (
    <>
      <AnimatePresence>
        {openModalWindow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.2, y: 300 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.2, y: 300 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`${
              openModalExpand ? "w-[60%]" : "w-full"
            } transition-width duration-200 h-full bg-[var(--color-gray-light)] rounded-[var(--border-radius-min)] p-2 z-100 absolute top-0 left-0 flex flex-col gap-1`}
          >
            <Header />
            <TabOptions />
            <div className="flex gap-1 h-full">
              <TabMenu />
              {section}
              <ActiveShowData />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
