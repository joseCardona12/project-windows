import { AnimatePresence, motion } from "framer-motion";
import ContentCardConfig from "../../molecules/ContentCardConfig";
import RecommendedConfiguration from "../RecommendedConfiguration";
import TryMicrosoft from "../TryMicrosoft";
import StorageCloud from "../StorageCloud";
import CustomDevice from "../CustomDevice";
import ItemList from "../../molecules/ItemList";
import { IconHelp } from "../../../../public/icons";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import HeaderModalConfig from "../../molecules/HeaderModalConfig";

interface IHomeSectionConfigurationProps {
  name: string;
  name_device: string;
}
export default function HomeSectionConfiguration({
  name,
  name_device,
}: IHomeSectionConfigurationProps): React.ReactNode {
  const { setModalSmall, modalSmall } = useModalSmall();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ marginTop: 100, opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
        exit={{ marginTop: 100, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-full flex flex-col gap-4"
      >
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
        <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[59%] scroll-custom">
          <ContentCardConfig>
            <RecommendedConfiguration />
          </ContentCardConfig>
          <ContentCardConfig>
            <TryMicrosoft />
          </ContentCardConfig>
          <ContentCardConfig>
            <StorageCloud />
          </ContentCardConfig>
          <ContentCardConfig width="" height="300px">
            <CustomDevice />
          </ContentCardConfig>
          <ItemList
            icon={<IconHelp />}
            text="Get help"
            click={() => {
              setModalSmall({
                state: !modalSmall.state,
                children: (
                  <div>
                    <HeaderModalConfig
                      title="Test"
                      setWindow={() => {
                        setModalSmall({
                          ...modalSmall,
                          state: false,
                        });
                      }}
                      setExpand={() => {
                        setModalSmall({
                          ...modalSmall,
                          state: false,
                        });
                      }}
                    />
                    <p>Loading...</p>
                  </div>
                ),
                width: "50%",
                height: "450px",
                positionPercent: { x: "25%", y: "10%" },
              });
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
