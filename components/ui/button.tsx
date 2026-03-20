import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#4a7c59] text-white font-bold hover:bg-[#6aaa7d] hover:text-[#070e1a] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(74,124,89,0.45)]",
        secondary:
          "bg-transparent text-[#f0f4f8] border-2 border-[rgba(106,170,125,0.5)] font-semibold hover:border-[#6aaa7d] hover:text-[#6aaa7d] hover:-translate-y-[3px]",
        cta: "bg-gradient-to-br from-[#4a7c59] to-[#6aaa7d] text-white font-extrabold shadow-[0_8px_40px_rgba(74,124,89,0.4)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(74,124,89,0.55)]",
        nav: "bg-[#4a7c59] text-white font-bold text-[0.85rem] hover:bg-[#6aaa7d] hover:text-[#070e1a] hover:-translate-y-[2px]",
      },
      size: {
        default: "px-[2.2rem] py-[0.95rem] text-base rounded-lg",
        sm: "px-[1.3rem] py-[0.55rem] text-[0.85rem] rounded-md",
        cta: "px-14 py-[1.2rem] text-[1.1rem] rounded-[10px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
