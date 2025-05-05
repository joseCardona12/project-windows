import IContentIconFiles from "@/ui/atoms/ContentIconFiles";
import { IconDoc, IconFolder } from "../../../../../public/icons";
import { useSection } from "@/app/core/application/state-global/section";
import Docs from "./Docs";

export default function CloudSection(): React.ReactNode {
  const { setStateSection } = useSection((state) => state);
  return (
    <section className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-4 w-full">
      <div className="flex gap-4  ">
        <IContentIconFiles
          click={() => {
            setStateSection({
              name: "docs",
              section: <Docs />,
              icon: <IconDoc />,
            });
          }}
          icon={<IconFolder className="text-[3rem]" />}
          title="Docs"
          tooltip={<>Content</>}
        />
        <IContentIconFiles
          click={() => {
            console.log("click");
          }}
          icon={<IconFolder className="text-[3rem]" />}
          title="Desktop"
          tooltip={<>Content</>}
        />
        <IContentIconFiles
          click={() => {
            console.log("click");
          }}
          icon={<IconFolder className="text-[3rem]" />}
          title="Images"
          tooltip={<>Content</>}
        />
      </div>
    </section>
  );
}
