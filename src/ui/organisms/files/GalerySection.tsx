"use client";
import { DATA_IMAGE } from "@/utils/constants/dataImage";
import SpinnerLoading from "../../atoms/SpinnerLoading";
import { useState } from "react";

export default function GalerySection(): React.ReactNode {
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(true);
  return (
    <section className="relative bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-2 w-full">
      {!loadingSpinner && (
        <div className="grid grid-cols-5 gap-2 ">
          {DATA_IMAGE.map((item: { url: string }, index: number) => (
            <div key={index} className={""}>
              <img
                src={item.url}
                alt="image"
                className={`rounded-[var(--border-radius-min)] hover:scale-[1.01] transition-all duration-200 cursor-pointer`}
              />
            </div>
          ))}
        </div>
      )}
      <SpinnerLoading loading={loadingSpinner} setLoading={setLoadingSpinner} />
    </section>
  );
}
