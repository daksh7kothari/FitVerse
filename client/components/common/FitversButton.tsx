import React from "react";
import clsx from "clsx";

interface FitverseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function FitverseButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: FitverseButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-fitverse-purple to-fitverse-pink text-white hover:shadow-lg hover:scale-105 active:scale-95",
    secondary:
      "bg-gradient-to-r from-fitverse-blue to-fitverse-blue text-white hover:shadow-lg hover:scale-105 active:scale-95",
    outline:
      "border-2 border-fitverse-purple text-fitverse-purple hover:bg-fitverse-purple hover:text-white active:scale-95",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
