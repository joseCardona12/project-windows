import IContentIconFiles from "@/ui/atoms/ContentIconFiles";
import { IconFolder } from "../../../../../public/icons";

export default function Docs(): React.ReactNode {
  return (
    <section className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-2 w-full">
      <div className="flex gap-4">
        <IContentIconFiles
          click={() => {}}
          icon={<IconFolder className="text-[3rem]" />}
          title="Test"
          tooltip={<>Content</>}
        />
      </div>
    </section>
  );
}
