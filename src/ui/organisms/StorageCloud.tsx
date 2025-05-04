import { IconCloudV2, IconList, IconSpeaker } from "../../../public/icons";
import Bar from "../atoms/Bar";
import Button from "../atoms/Button";
import ItemList from "../molecules/ItemList";

export default function StorageCloud(): React.ReactNode {
  return (
    <div className="flex flex-col gap-6">
      <IconCloudV2 />
      <div>
        <h4 className="text-[1.1rem] font-medium">Storage cloud</h4>
        <p className="text-[.9rem] text-[var(--color-text)]">...</p>
      </div>
      <Bar width="80%" />
      <div>
        <Button variant="red">Get more storage</Button>
      </div>
      <div className="flex flex-col gap-2">
        <ItemList icon={<IconList />} text="PC Copy security" isArrow />
        <ItemList
          icon={<IconSpeaker />}
          text="Management storage cloud"
          isArrow
        />
      </div>
    </div>
  );
}
