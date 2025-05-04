import { IMessage } from "@/interfaces/message";

export default function UseMessage() {
  const message = ({ title, variant, description }: IMessage) => {
    return (
      <div
        className={`absolute bottom-100 right-20 ${
          variant === "error"
            ? "bg-[var(--color-red)] text-white"
            : "bg-[var(--color-gray-light-02)]"
        } p-2 w-[30%] rounded-[var(--border-radius-min)] z-100`}
      >
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    );
  };
  return {
    message,
  };
}
