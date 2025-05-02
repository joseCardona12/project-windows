import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({ ...props }: IInputProps): React.ReactNode {
  return <input {...props} />;
}
