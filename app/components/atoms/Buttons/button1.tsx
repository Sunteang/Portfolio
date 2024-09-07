import { cn } from "../../../../utils/cn";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "contain" | "outline" | "text";
  color?:
    | "primary"
    | "secondary"
    | "portfolio_one"
    | "portfolio_two"
    | "portfolio_three"
    | "success"
    | "error";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contain",
  color = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles =
    "px-8 py-2 rounded-full font-medium transition-colors duration-300";
  const variantStyles = {
    contain: {
      primary: "bg-blue-500 text-white hover:bg-blue-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-700",
      portfolio_one:
        "bg-[#00ADB5] drop-shadow-md text-white hover:bg-[#09898E]",
      portfolio_two:
        "bg-[#393E46] drop-shadow-md text-white hover:bg-[#2F3236]",
      portfolio_three:
        "bg-[#222831] drop-shadow-md text-white hover:bg-[#373A3F]",
      success: "bg-green-500 text-white hover:bg-green-700",
      error: "bg-red-500 text-white hover:bg-red-700",
    },
    outline: {
      primary:
        "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
      secondary:
        "bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",
      portfolio_one:
        "bg-transparent text-[#00ADB5] border border-[#00ADB5] hover:bg-[#00ADB5] hover:text-white",
      portfolio_two:
        "bg-transparent text-[#393E46] border border-[#00ADB5] hover:bg-[#00ADB5] hover:text-white",
      portfolio_three:
        "bg-transparent text-[#222831] border border-[#00ADB5] hover:bg-[#00ADB5] hover:text-white",
      success:
        "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
      error:
        "bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",
    },
    text: {
      primary: "hover:bg-blue-100 text-blue-700",
      secondary: "hover:bg-gray-100 text-gray-700",
      portfolio_one: "hover:bg-[#AAFBFF] drop-shadow-md text-[#00ADB5]",
      portfolio_two: "hover:bg-[#393E46] drop-shadow-md text-[#373A3F]",
      portfolio_three: "hover:bg-[#222831] drop-shadow-md text-[#373A3F]",
      success: "hover:bg-green-100 text-green-700",
      error: "hover:bg-red-100 text-red-700",
    },
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    // without merge class
    // <button
    //   className={`${baseStyles} ${variantStyles[variant]?.[color]} ${disabledStyles} ${className}`}
    //   disabled={disabled}
    //   {...props}
    // >
    //   {children}
    // </button>

    // within merge class
    <button
      className={cn(
        baseStyles,
        variantStyles[variant]?.[color],
        disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
