import { useDesktopBackground } from "@/app/core/application/state-global/desktopBackground";
import { useMessage } from "@/app/core/application/state-global/messge";
import UseMessage from "@/hooks/useMessage";
import { DATA_IMAGE } from "@/utils/constants/dataImage";
import ItemList from "../molecules/ItemList";

export default function CustomDevice(): React.ReactNode {
  const { setDesktopBackground } = useDesktopBackground((state) => state);
  const { setMessage, message } = useMessage((state) => state);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-medium text-[1.1rem]">Custom Device</h2>
      <div className="flex gap-2 items-center">
        <div className="w-full rounded-[var(--border-radius-min)] grid grid-cols-3 gap-2">
          {DATA_IMAGE.map((image, index: number) =>
            index < 5 ? (
              <div
                onClick={() => {
                  setMessage({
                    title: "Changed background sucess",
                    description: "",
                    variant: "success",
                    state: !message.state,
                  });

                  console.log("click");
                  setDesktopBackground(image.url);
                }}
                key={index}
                className="relative border border-transparent hover:border-[var(--color-red)] rounded-[var(--border-radius-min)] transition-all duration-150  cursor-pointer"
              >
                <img
                  src={image.url}
                  className="rounded-[var(--border-radius-min)] h-full w-full object-cover"
                />
                <div className="absolute bottom-1 right-1 w-10 h-10 bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)]"></div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
