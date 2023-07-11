"use client"
import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { OpenEye, ClosedEye } from "@icons";

interface TextFieldProps {
  type: "text" | "number" | "email" | "password";
  label?: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  errorMessage: string;
  disabled?: boolean;
  passwordIcon?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  required?: boolean;
  autoComplete?: string;
}

const TextField: FC<TextFieldProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  errorMessage,
  disabled,
  passwordIcon,
  onClick,
  onChange,
  required,
  autoComplete,
  ...props
}) => {
  const [eye, setEye] = useState(true);
  const [passwordType, setPasswordType] = useState(type)
  return (
    <div className="flex flex-col input-wrapper gap-2">
      {label && (
        <label htmlFor={label} className="text-[#333333] text-sm">
          {label}
        </label>
      )}
      <div className="border-stroke border bg-white/70 rounded-md w-full text-neutral px-4 py-2 select-none flex items-center justify-between">
        <input
          className="flex-1 outline-none text-gray-800"
          type={type==="password"? passwordType : type}
          id={label}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          {...props}
        />
        {passwordIcon && (
          <div onClick={() => {
            setEye(!eye)
            if(passwordType==="password"){
                setPasswordType("text");
            } else{
              setPasswordType("password")
            }
          
          }} className="cursor-pointer">{eye ? <OpenEye />: <ClosedEye />}</div>
        )}
      </div>

      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default TextField;
