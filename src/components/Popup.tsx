import { useState } from "react";
import Button from "./Button";

const Popup = () => {
  const [open, setOpen] = useState<boolean>(true);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`relative rounded-2xl shadow-xl z-50 animate-fadeIn w-[350px]`}
      >
        <div className="relative">
          <div className="absolute top-10 left-0 right-0 m-auto text-center">
            <h1 className="font-bold text-[24px] bg-linear-to-r from-[#FFFFFF] via-[#FFD3E3] to-[#FFEA9F] inline-block text-transparent bg-clip-text">
              XIAOMI TV max Series
            </h1>
            <h3 className="text-neutral font-light text-[16px]">
              View to the max
            </h3>
          </div>
          <img
            src="/images/banner.jpg"
            alt="banner"
            className="rounded-2xl object-cover h-[404px]"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <Button label="SEE MORE" />
          </div>
        </div>

        <button
          className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-neutral-200 text-xl bg-secondary-800 rounded-full w-8 h-8"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Popup;
