import { ReactElement, useState } from "react";
import { IconDoctThreeV2, IconTrash } from "../../../public/icons";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import ItemList from "../molecules/ItemList";

interface IContentIconCircleProps {
  icon: ReactElement;
  name: string;
  click: () => void;
}
export default function ContentIconCircle({
  icon,
  name,
  click,
}: IContentIconCircleProps): React.ReactNode {
  const [activeMouse, setActiveMouse] = useState<boolean>(false);
  const { modalSmall, setModalSmall } = useModalSmall((state) => state);
  return (
    <div
      onMouseEnter={() => setActiveMouse(true)}
      onMouseLeave={() => setActiveMouse(false)}
      className="relative flex flex-col gap-2 justify-center items-center hover:bg-[var(--color-gray-light-02)] p-4 pl-6 pr-6 rounded-[var(--border-radius-min)] cursor-pointer transition-colors duration-200"
    >
      <span className="w-10 h-10 rounded-full flex justify-center items-center bg-[var(--color-gray-light-03)]">
        {icon}
      </span>
      <p>{name}</p>
      {activeMouse && (
        <span
          onClick={(e) => {
            const clientX = e.clientX;
            const clientY = e.clientY;
            setModalSmall({
              state: !modalSmall.state,
              children: (
                <div>
                  <ItemList click={click} icon={<IconTrash />} text="Remove" />
                </div>
              ),
              position: { x: clientX, y: Number(`${clientY + 20}`) },
              width: "20%",
              height: "",
            });
          }}
          className="absolute top-1 right-1 hover:bg-[var(--color-gray-light-03)] p-1 rounded-[var(--border-radius-min)] border border-transparent hover:border-[var(--border-gray)]"
        >
          <IconDoctThreeV2 />
        </span>
      )}
    </div>
  );
}
