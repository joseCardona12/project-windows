import { AnimatePresence, motion } from "framer-motion";

interface IModalSmallProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  position: { x: number; y: number };
  children: React.ReactNode;
}
export default function ModalSmall({
  openModal,
  position,
  children,
}: IModalSmallProps): React.ReactNode {
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.1 }}
          style={{
            top: position.y,
            left: position.x,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
          className={`fixed bg-[var(--color-gray-light-02)] p-2 rounded-[var(--border-radius-min)] z-100 w-[15%]`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
