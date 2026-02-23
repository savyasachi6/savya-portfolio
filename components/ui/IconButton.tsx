import React from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, icon, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-muted transition-colors hover:bg-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-accent",
                    className
                )}
                {...props}
            >
                {icon}
            </button>
        );
    }
);
IconButton.displayName = "IconButton";
