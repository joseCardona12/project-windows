import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useState } from "react";

interface IContentIconFiles {
  icon: ReactElement;
  title: string;
  click: () => void;
  tooltip?: React.ReactNode;
}
export default function IContentIconFiles({
  icon,
  title,
  click,
  tooltip,
}: IContentIconFiles): React.ReactNode {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div
      onClick={click}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className="relative flex flex-col justify-center items-center gap-1 cursor-pointer border p-2 border-transparent rounded-[var(--border-radius-min)] hover:border-[var(--border-gray)] hover:bg-[var(--color-gray-light-03)]"
    >
      {icon}
      <p>{title}</p>
      <AnimatePresence>
        {tooltip && onHover && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute z-100 w-[100px] top-16 left-10 p-2 bg-[var(--color-gray-light-03)] border border-[var(--border-gray)] rounded-[var(--border-radius-min)]"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
