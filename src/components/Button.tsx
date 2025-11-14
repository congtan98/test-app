import clsx from "clsx";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { label, color = "primary", disabled = false, ...rest } = props;

  return (
    <button
      className={clsx(
        "h-9 md:h10 px-8 py-2 cursor-pointer rounded-[100px] uppercase font-black inline-flex items-center justify-center transition-all duration-200 ease-in-out",
        color === "primary"
          ? "bg-primary text-neutral-900 hover:bg-[#C79B12]"
          : "border border-primary text-neutral-200 hover:border-[#FFE8AB]",

        disabled ? "opacity-40" : ""
      )}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
