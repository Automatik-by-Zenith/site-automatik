import * as React from "react";
import { cn } from "@/lib/utils";

const LiquidCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("liquid-card", className)} {...props}>
    <div className="liquid-card__content">{children}</div>
  </div>
));
LiquidCard.displayName = "LiquidCard";

export { LiquidCard };
