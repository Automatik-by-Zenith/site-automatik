import { cn } from "@/lib/utils";

interface BlockQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export const BlockQuote = ({ children, className }: BlockQuoteProps) => {
  return (
    <blockquote className={cn("relative py-8 px-10 my-8", className)}>
      <span 
        className="absolute top-0 text-[140px] leading-none text-primary/20 select-none pointer-events-none -rotate-45"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        "
      </span>
      <p className="relative z-10 text-lg italic text-muted-foreground leading-relaxed pl-2">
        {children}
      </p>
    </blockquote>
  );
};
