"use client";
import { useState } from "react";
import { IconSearch } from "../../../public/icons";
import Input from "../atoms/Input";

export default function InputSearch(): React.ReactNode {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div
      className={`flex items-center gap-2 bg-[var(--color-gray-light-02)] border border-[var(--color-gray-light)] ${
        isFocus && "border-gray-300"
      } p-2 pl-4 pr-4 rounded-[var(--border-radius-min)]`}
    >
      <Input
        className="outline-none text-[.9rem]"
        placeholder="Search on Home..."
        onFocus={() => {
          console.log("focus");
          setIsFocus(!isFocus);
        }}
      />
      <span className="cursor-pointer">
        <IconSearch />
      </span>
    </div>
  );
}
