import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline";
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                    {
                        "border-transparent bg-surface text-primary hover:bg-primary/20 hover:border-primary/50": variant === "default",
                        "border-border-subtle text-text-muted hover:text-text-primary": variant === "outline",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";
