import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceIcon } from "@/components/ui/service-icon";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
  iconSize?: "sm" | "md" | "lg";
  className?: string;
  badge?: React.ReactNode;
  horizontal?: boolean;
}

const iconSizeMap = {
  sm: {
    container: "w-12 h-12",
    icon: "w-6 h-6",
  },
  md: {
    container: "w-14 h-14",
    icon: "w-7 h-7",
  },
  lg: {
    container: "w-16 h-16",
    icon: "w-8 h-8",
  },
} as const;

export const IconCard = React.forwardRef<HTMLDivElement, IconCardProps>(
  ({ icon, title, description, children, iconSize = "md", className, badge, horizontal = false }, ref) => {
    const sizes = iconSizeMap[iconSize];

    return (
      <Card
        ref={ref}
        variant="glass"
        className={cn("h-full", className)}
      >
        <CardHeader className={cn(horizontal && "flex-row items-center gap-4")}>
          <ServiceIcon 
            icon={icon} 
            className={cn(sizes.container, horizontal ? "mb-0" : "mb-4", "group-hover:scale-110")}
            iconClassName={sizes.icon}
          />
          <div className={cn(horizontal && "flex-1")}>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {badge}
        </CardHeader>
        {(description || children) && (
          <CardContent>
            {description && (
              <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
            )}
            {children}
          </CardContent>
        )}
      </Card>
    );
  }
);

IconCard.displayName = "IconCard";
