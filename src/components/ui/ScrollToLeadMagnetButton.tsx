"use client";
import { Button, ButtonProps } from './button';

interface ScrollToLeadMagnetButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const ScrollToLeadMagnetButton = ({
  children,
  onClick,
  ...props
}: ScrollToLeadMagnetButtonProps) => (
  <Button
    onClick={(e) => {
      document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
      onClick?.(e);
    }}
    {...props}
  >
    {children}
  </Button>
);
