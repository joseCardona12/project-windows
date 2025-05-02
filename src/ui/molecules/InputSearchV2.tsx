import { IconSearch } from "../../../public/icons";
import Input from "../atoms/Input";

export default function InputSearchV2(): React.ReactNode {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-[var(--color-gray-light-02)] p-1 pl-2 pr-2 border border-[var(--border-gray)]">
      <IconSearch />
      <Input placeholder="Search.." className="text-[.9rem] outline-none" />
    </div>
  );
}
