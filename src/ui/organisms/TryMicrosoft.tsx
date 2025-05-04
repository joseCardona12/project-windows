import {
  IconExcel,
  IconPowerPoint,
  IconWindow,
  IconWord,
} from "../../../public/icons";
import Button from "../atoms/Button";

export default function TryMicrosoft(): React.ReactNode {
  return (
    <div className="flex flex-col gap-8">
      <span>
        <IconWindow />
      </span>
      <div>
        <h4 className="font-medium text-[1.1rem]">Try Microsoft 365</h4>
        <p className="text-[var(--color-text)] text-[.9rem]">
          Experiment versions of app desktop as Word, PowerPoint and many more
          charactericts with AI technologies.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <IconWord className="text-[var(--color-blue)]" />
        <IconExcel className="text-[var(--color-green)]" />
        <IconPowerPoint className="text-[var(--color-red)]" />
      </div>
      <div>
        <Button variant="red">Try it free</Button>
      </div>
    </div>
  );
}
