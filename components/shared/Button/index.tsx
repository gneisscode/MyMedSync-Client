"use client"
import { FC, MouseEvent } from "react";
import { Spinner } from "@chakra-ui/react";


type VariantOption = "primary" | "secondary" | "tertiary" | "neutral" | "stroke";

interface ButtonProps {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
  className?: string;
  variant: VariantOption;
  disabled?: boolean
}

interface VariantsTypes {
  [key: string]: string 
  primary: string;
  secondary: string;
  tertiary: string;
  neutral: string;
  stroke: string;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  loading,
  className,
  variant,
  disabled,
  ...props
}) => {
  const btnVariants: VariantsTypes = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: " text-neutral",
    neutral: "bg-neutral text-white",
    stroke: "bg-stroke text-white",
  };

  return (
    <button
      className={[
        "px-4 py-2 w-full outline-none border-none select-none",
        loading ? "disabled cursor-not-allowed opacity-60" : "",
        btnVariants[variant],
        className,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {loading ? <Spinner /> : <p className="text-base font-semibold">{label}</p>}
    </button>
  );
};

export default Button
