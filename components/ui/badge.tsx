import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(74,124,89,0.15)] border-[rgba(74,124,89,0.2)] text-[#6aaa7d]",
        hero: "bg-[rgba(74,124,89,0.15)] border-[rgba(74,124,89,0.2)] text-[#6aaa7d] text-[0.8rem]",
        cta: "bg-[rgba(74,124,89,0.2)] border-[rgba(106,170,125,0.4)] text-[#6aaa7d] text-[0.82rem]",
        section:
          "bg-transparent border-transparent text-[#6aaa7d] text-[0.78rem] tracking-[0.15em] px-0 py-0",
        pillar:
          "bg-[rgba(74,124,89,0.08)] border-[rgba(74,124,89,0.2)] text-[#6aaa7d] rounded-full px-8 py-3 text-[0.9rem] font-bold tracking-[0.04em]",
        loss: "bg-[rgba(224,82,82,0.12)] border-transparent text-[#e05252] rounded px-2.5 py-0.5 text-[0.75rem] font-bold tracking-[0.05em]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
