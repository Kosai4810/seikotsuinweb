import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--fukai-ai)] text-white hover:bg-[#152d4a] border border-[var(--fukai-ai)]",
  secondary:
    "bg-white text-[var(--sumi)] hover:bg-[var(--usuzumi)] border border-[var(--usuzumi-line)]",
  outline:
    "bg-transparent text-[var(--fukai-ai)] hover:bg-[var(--fukai-ai)] hover:text-white border border-[var(--fukai-ai)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fukai-ai)] focus-visible:ring-offset-2";

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
