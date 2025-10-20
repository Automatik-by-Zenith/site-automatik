import { GradientText } from "@/components/ui/GradientText";

interface LogoProps {
  variant?: "default" | "gradient";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src="/assets/logo-zenith.svg"
        alt="Zenith Logo"
        className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0"
        style={{ filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))' }}
      />
      <div>
        {variant === "gradient" ? (
          <h1 className="text-xl font-bold leading-tight">
            <GradientText>Automatik</GradientText>
          </h1>
        ) : (
          <h1 className="text-xl font-bold leading-tight text-primary">
            Automatik
          </h1>
        )}
        <p className="text-xs text-muted-foreground">by Zenith</p>
      </div>
    </div>
  );
};
