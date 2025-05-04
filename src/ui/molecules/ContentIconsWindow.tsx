import { useState } from "react";
import { IconArrowRightV2 } from "../../../public/icons";
import Button from "../atoms/Button";
import { AnimatePresence, motion } from "framer-motion";

interface IContentIconsWindowProps {
  title: string;
  contentInitial: React.ReactNode;
  contentRight: React.ReactNode;
  textButton: string;
  textButtonBack: string;
}
export default function ContentIconsWindow({
  title,
  contentInitial,
  textButton,
  contentRight,
  textButtonBack,
}: IContentIconsWindowProps): React.ReactNode {
  const [isClickRight, setIsClickRight] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium">{title}</h5>
        <Button onClick={() => setIsClickRight(!isClickRight)}>
          <p>{!isClickRight ? textButton : textButtonBack}</p>
          <span>
            <IconArrowRightV2 />
          </span>
        </Button>
      </div>
      <AnimatePresence custom={isClickRight ? 1 : -1} mode="wait">
        <motion.div
          key={!isClickRight ? "right" : "left"}
          initial={{ marginLeft: -50, opacity: 0 }}
          animate={{ marginLeft: 0, opacity: 1 }}
          exit={{ marginLeft: -50, opacity: 0 }}
        >
          {isClickRight ? contentRight : contentInitial}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
