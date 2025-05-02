import { useState } from "react";
import { IconArrowDownV2 } from "../../../public/icons";
import { AnimatePresence, motion } from "framer-motion";

interface IActiveContentProps {
  text: string;
  children: React.ReactNode;
}
export default function ActiveContent({
  text,
  children,
}: IActiveContentProps): React.ReactNode {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4 ">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 hover:bg-[var(--color-gray-light-03)] w-[20%] p-2 rounded-[var(--border-radius-min)] cursor-pointer transition-colors duration-200 border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)]"
      >
        <span>
          <IconArrowDownV2 />
        </span>
        <p>{text}</p>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, marginTop: -20 }}
            animate={{ opacity: 1, marginTop: 0 }}
            exit={{ opacity: 0, marginTop: -20 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="pl-20"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
