import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const floatingInputClassName =
  "block py-2.5 px-0 w-full text-sm text-white/90 bg-transparent border-0 border-b border-input appearance-none focus:outline-none focus:ring-0 focus:border-primary peer";

interface FloatingInputProps {
  label: string;
  customInput?: (inputId: string, className: string) => ReactNode;
  labelClassName?: string;
  className?: string;
}

const FloatingInput = ({
  label,
  customInput,
  className,
  labelClassName,
  ...rest
}: FloatingInputProps) => {
  return (
    <div className="relative z-0">
      {customInput ? (
        customInput("floating_standard", floatingInputClassName)
      ) : (
        <input
          id="floating_standard"
          className={cn(floatingInputClassName, className)}
          placeholder=""
          {...rest}
        />
      )}

      <label
        htmlFor="floating_standard"
        className={cn(
          "absolute text-sm text-muted-foreground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
