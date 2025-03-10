
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface PulsatingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
  children: React.ReactNode;
}

const PulsatingButton: React.FC<PulsatingButtonProps> = ({
  className,
  variant = 'primary',
  showArrow = true,
  children,
  ...props
}) => {
  const baseClasses = "relative overflow-hidden btn-cta transition-all duration-300";
  
  const variantClasses = {
    primary: "btn-cta-primary",
    secondary: "btn-cta-secondary",
    outline: "btn-cta-outline"
  };

  return (
    <button 
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {showArrow && <ArrowRight className="h-5 w-5" />}
      </span>
      <span className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer" />
    </button>
  );
};

export default PulsatingButton;
