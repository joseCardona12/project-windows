import { ReactElement } from "react";
import { motion } from "framer-motion";

interface IClassVariant {
  default: string;
  outline: string;
}
interface IIconProps {
  icon: ReactElement;
  click?: () => void;
  isActive?: boolean;
  variant?: "default" | "outline";
}
export default function Icon({
  icon,
  click,
  isActive,
  variant = "default",
}: IIconProps): React.ReactNode {
  const classVariant: IClassVariant = {
    default:
      "hover:bg-[var(--color-gray-light-02)] border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)]",
    outline:
      "text-white hover:bg-white/20 border border-transparent hover:border-white/50 transition-colors duration-200",
  };
  return (
    <span
      onClick={click}
      className={`relative p-2 rounded-[var(--border-radius-min)] cursor-pointer ${classVariant[variant]}`}
    >
      {icon}
      {isActive && (
        <motion.div
          initial={{ position: "absolute", bottom: -10, left: 0, opacity: 0 }}
          animate={{ position: "absolute", bottom: 0, left: 0, opacity: 1 }}
          exit={{ position: "absolute", bottom: -10, left: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-full h-1 flex justify-center"
        >
          <div className="rounded-[6px] bg-[var(--color-red)] w-[50%]"></div>
        </motion.div>
      )}
    </span>
  );
}
