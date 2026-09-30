import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C67C08] text-white hover:bg-[#a96806] border-2 border-[#C67C08] shadow-[0_6px_0_rgba(107,84,58,0.18)] hover:shadow-[0_3px_0_rgba(107,84,58,0.18)] hover:translate-y-0.5",
  secondary:
    "bg-paper text-brown hover:bg-cream-deep border-2 border-line-warm",
  outline:
    "bg-paper text-[#a96806] hover:bg-[#C67C08] hover:text-white border-2 border-[#C67C08]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, href, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-extrabold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fukai-ai)] focus-visible:ring-offset-2";

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
