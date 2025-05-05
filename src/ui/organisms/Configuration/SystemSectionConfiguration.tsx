import { AnimatePresence, motion } from "framer-motion";

interface ISystemSectionConfigurationProps {
  name_device: string;
  name: string;
}
export default function SystemSectionConfiguration({
  name,
  name_device,
}: ISystemSectionConfigurationProps): React.ReactNode {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ marginTop: 100, opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
        exit={{ marginTop: 100, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="bg-[var(--color-red)] w-[100px] rounded-[var(--border-radius-min)] p-1">
              <img
                src="https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img-device"
                className="w-full h-full object-cover rounded-[var(--border-radius-min)]"
              />
            </div>
            <div>
              <h5 className="font-medium">{name}</h5>
              <p className="text-[var(--color-text)] text-[.9rem]">
                {name_device}
              </p>
              <p>Change name</p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
