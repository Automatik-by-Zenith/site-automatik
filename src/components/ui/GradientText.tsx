import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => (
  <span className={cn(
    "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
    className
  )}>
    {children}
  </span>
);
