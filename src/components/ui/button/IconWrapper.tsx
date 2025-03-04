import { ReactNode } from "react";

interface IconWrapperProps {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // Ukuran dinamis
  className?: string;
}

// Mapping ukuran ke Tailwind CSS
const sizeClasses = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
  xl: "w-8 h-8",
};

const IconWrapper = ({ children, size = "md", className = "" }: IconWrapperProps) => {
  return <span className={`${sizeClasses[size]} text-white ${className}`}>{children}</span>;
};

export default IconWrapper;
