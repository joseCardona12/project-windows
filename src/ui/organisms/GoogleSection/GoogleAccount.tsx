import Icon from "@/ui/atoms/Icon";
import { IconClose } from "../../../../public/icons";

export default function GoogleAccount(): React.ReactNode {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <p>josesimonbarreto.design@gmail.com</p>
        <Icon icon={<IconClose />} />
      </div>
      <div></div>
    </div>
  );
}
