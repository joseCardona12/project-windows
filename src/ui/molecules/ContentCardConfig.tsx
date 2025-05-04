import { AnimatePresence, motion } from "framer-motion";

interface IContentCardConfigProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}
export default function ContentCardConfig({
  children,
  width,
  height,
}: IContentCardConfigProps): React.ReactNode {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ marginTop: -100, opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
        exit={{ marginTop: -100, opacity: 0 }}
        transition={{ duration: 0.9, ease: "anticipate" }}
        className="bg-[var(--color-gray-light-02)] p-4 rounded-[var(--border-radius-min)]"
        style={{ width, height }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
