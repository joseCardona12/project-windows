import { AnimatePresence, motion } from "framer-motion";

interface IModalCustomProps {
  openModal: boolean;
  children: React.ReactNode;
}
export default function ModalCustom({
  openModal,
  children,
}: IModalCustomProps): React.ReactNode {
  return (
    <>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ scale: 0.3, opacity: 0, y: 300 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.3, opacity: 0, y: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full p-2 z-20 bg-[var(--color-gray-light)]"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
