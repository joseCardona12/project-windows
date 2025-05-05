import { AnimatePresence, motion } from "framer-motion";
import { ReactElement, useState, MouseEvent } from "react";

interface IIconCircleProps {
  icon: ReactElement;
  tooltip: React.ReactNode;
  click: (e: MouseEvent<HTMLDivElement>) => void;
}
export default function IconCircle({
  icon,
  tooltip,
  click,
}: IIconCircleProps): React.ReactNode {
  const [onHover, setOnHover] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        onClick={(e) => click(e)}
        className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-[var(--color-gray-light-03)] cursor-pointer transition-colors duration-200 border border-transparent hover:border-[var(--border-gray)] p-1"
      >
        {icon}
      </div>
      <AnimatePresence>
        {tooltip && onHover && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className=" w-[100px] absolute top-8 right-10 bg-[var(--color-black)] text-[var(--color-gray-light)] p-1 pl-2 pr-2 rounded-[var(--border-radius-min)]"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
