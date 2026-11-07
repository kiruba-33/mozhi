import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7041D8] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs sm:text-xs px-3.5 py-2.5 min-h-[42px] gap-1.5',
    md: 'text-sm px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] gap-2',
    lg: 'text-sm sm:text-base px-5 sm:px-6 py-3.5 min-h-[48px] gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-[#7041D8] hover:bg-[#5E32BA] text-white shadow-sm hover:shadow-md hover:shadow-[#7041D8]/20',
    secondary: 'bg-white hover:bg-[#F7F5FC] text-[#29243A] border border-[#E9E5F0] hover:border-[#B69AFB] shadow-sm',
    ghost: 'bg-transparent hover:bg-[#F7F5FC] text-[#706B7C] hover:text-[#29243A]',
    soft: 'bg-[#F0ECF8] hover:bg-[#E6DEFB] text-[#7041D8] font-semibold',
    outlineWhite: 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="shrink-0 text-current text-[1.15em]" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="shrink-0 text-current text-[1.15em]" />}
    </button>
  );
}
