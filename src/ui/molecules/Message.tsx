import { useMessage } from "@/app/core/application/state-global/messge";
import { AnimatePresence, motion } from "framer-motion";
import { IconCheckV2, IconClose, IconError } from "../../../public/icons";
import { useEffect } from "react";

export default function Message(): React.ReactNode {
  const { message, setMessage } = useMessage((state) => state);

  useEffect(() => {
    if (message.state) {
      const timer = setTimeout(() => {
        setMessage({
          ...message,
          state: false,
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.state]);
  return (
    <>
      <AnimatePresence>
        {message.state && (
          <motion.div
            initial={{ marginRight: -100, opacity: 0 }}
            animate={{ marginRight: 0, opacity: 1 }}
            exit={{ marginRight: -100, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`absolute bottom-19 right-2 ${
              message.variant === "error"
                ? "bg-[var(--color-red)] text-white"
                : "bg-[var(--color-sucess)]"
            } w-[30%] rounded-[var(--border-radius-min)] z-100 h-[50px]`}
          >
            <div className="flex flex-col justify-center h-full gap-2 relative">
              <div className="flex items-center gap-2 p-4">
                {message.variant === "success" ? (
                  <IconCheckV2 className="" />
                ) : (
                  <IconError className="text-[var(--color-red)]" />
                )}
                <div className="flex flex-col">
                  {message.title && <h5>{message.title}</h5>}
                  {message.description && <p>{message.description}</p>}
                </div>
              </div>
              <span
                className="absolute top-1 right-1 cursor-pointer"
                onClick={() =>
                  setMessage({
                    ...message,
                    state: !message.state,
                  })
                }
              >
                <IconClose />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
