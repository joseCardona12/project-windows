"use client";
import { useEffect } from "react";

interface ISpinnerLoadingProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
}
export default function SpinnerLoading({
  loading,
  setLoading,
}: ISpinnerLoadingProps): React.ReactNode {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
