import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  href,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF00] select-none group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-2 tracking-widest',
    md: 'text-sm px-6 py-3.5 gap-2.5 tracking-wider',
    lg: 'text-base px-8 py-4 gap-3 tracking-widest font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#D7FF00] text-[#101010] hover:bg-[#cbf438] active:scale-[0.98] shadow-sm hover:shadow-[0_0_25px_rgba(215,255,0,0.35)]',
    secondary:
      'bg-[#171717] text-[#F4F1E9] border border-[#303030] hover:border-[#D7FF00] hover:text-[#D7FF00] active:scale-[0.98]',
    outline:
      'bg-transparent text-[#F4F1E9] border border-[#303030] hover:border-[#D7FF00] hover:text-[#D7FF00]',
    ghost:
      'bg-transparent text-[#A5A5A0] hover:text-[#D7FF00] px-2 py-1',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon === 'arrow-right' && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-current" />
      )}
      {icon === 'arrow-up-right' && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-current" />
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};
