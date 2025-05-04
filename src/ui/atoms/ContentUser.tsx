import { IconUser } from "../../../public/icons";

interface IContentUserProps {
  name: string;
  email?: string;
}
export default function ContentUser({
  name,
  email,
}: IContentUserProps): React.ReactNode {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border-gray)] bg-[var(--color-gray-light-03)]">
        <IconUser className="text-black/30" />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        {email && (
          <p className="text-[.8rem] text-[var(--color-text)]">{email}</p>
        )}
      </div>
    </div>
  );
}
