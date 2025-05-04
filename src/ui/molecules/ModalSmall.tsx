import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalSmall(): React.ReactNode {
  const { modalSmall } = useModalSmall();
  return (
    <AnimatePresence>
      {modalSmall.state && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          style={{
            top: modalSmall.position?.y || modalSmall.positionPercent?.y,
            left: modalSmall.position?.x || modalSmall.positionPercent?.x,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            width: modalSmall.width,
            height: modalSmall.height,
            transform: modalSmall.transform,
          }}
          className={`fixed bg-[var(--color-gray-light-02)] p-2 rounded-[var(--border-radius-min)] z-100 ${
            !modalSmall.width && "w-[15%]"
          }  ${modalSmall.isBottom && "bottom-0"}`}
        >
          {modalSmall.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
