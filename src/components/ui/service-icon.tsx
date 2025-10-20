import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceIconProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export const ServiceIcon = ({ icon: Icon, className, iconClassName }: ServiceIconProps) => {
  return (
    <div
      className={cn(
        "w-16 h-16 rounded-xl border-2 border-primary bg-card/50 flex items-center justify-center transition-all duration-500",
        className
      )}
    >
      <Icon className={cn("w-8 h-8 text-primary", iconClassName)} />
    </div>
  );
};
