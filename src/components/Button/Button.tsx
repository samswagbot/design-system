import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Text for button */
  children: ReactNode;
  /** Variant changes the background color */
  variant?: 'primary' | 'secondary' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

const variantMap = {
  primary: 'blue-600',
  secondary: 'gray-400',
  success: 'green-500',
};

const sizeMap = {
  sm: `text-xs py(2 md:1) px-2`,
  md: `text-sm py(3 md:2) px-2`,
  lg: `text-lg py-2 px-4`,
  xl: `text-xl py-3 px-6`,
};

const defaultStyles = 'p-2 text-white rounded';

/** A reusable button for all! */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: Props) => {
  const width = fullWidth ? 'w-full' : '';
  const baseClass = `bg-${variantMap[variant]} ${sizeMap[size]} ${width}`;
  return (
    <button {...props} className={`${defaultStyles} ${baseClass}`}>
      {children}
    </button>
  );
};
