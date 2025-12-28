import React from "react";
import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export default function Card({
  children,
  hoverable = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl p-6 shadow-md border border-gray-100",
        hoverable &&
          "hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
