import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  className?: string;
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 40,
};

export const Spinner = ({ size = "md", color = "primary", className }: SpinnerProps) => {
  const dimension = sizeMap[size];
  
  const colorClass = {
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    white: "text-white",
  }[color];

  return (
    <svg
      className={cn("animate-spin", colorClass, className)}
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="60 20"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
};
