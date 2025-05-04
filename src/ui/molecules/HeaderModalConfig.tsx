import { IconArrowLeft } from "../../../public/icons";
import Icon from "../atoms/Icon";
import TabCloseExpand from "./TabCloseExpand";

interface IHeaderModalConfigProps {
  title: string;
  setExpand: () => void;
  setWindow: () => void;
}
export default function HeaderModalConfig({
  title,
  setWindow,
  setExpand,
}: IHeaderModalConfigProps): React.ReactNode {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon icon={<IconArrowLeft />} />
        <p>{title}</p>
      </div>
      <TabCloseExpand
        setOpenModalExpand={setExpand}
        setOpenModalWindow={setWindow}
      />
    </div>
  );
}
