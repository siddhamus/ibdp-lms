//src/components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

// Primary Button: Solid cyan background that darkens on hover.
export const PrimaryButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold transition duration-300 hover:bg-cyan-600 ${className}`}
  >
    {children}
  </button>
);

// Secondary Button: Transparent with cyan border and text; fills with cyan and white text on hover.

export const SecondaryButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 border border-cyan-500 text-cyan-500 rounded-lg font-semibold transition duration-300 hover:bg-cyan-500 hover:text-white ${className}`}
  >
    {children}
  </button>
);

export const CTAButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`bg-white border border-cyan-600 text-cyan-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${className}`}
  >
    {children}
  </button>
);
