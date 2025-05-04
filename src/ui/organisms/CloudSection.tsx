import { IconFolder } from "../../../public/icons";

export default function CloudSection(): React.ReactNode {
  return (
    <section className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-4 w-full">
      <div className="flex">
        <div className="flex flex-col gap-1 cursor-pointer border p-2 border-transparent rounded-[var(--border-radius-min)] hover:border-[var(--border-gray)] hover:bg-[var(--color-gray-light-03)]">
          <IconFolder className="text-[2.5rem]" />
          <p>Documents</p>
        </div>
      </div>
    </section>
  );
}
