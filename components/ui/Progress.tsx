import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("relative h-2 w-full overflow-hidden rounded-full bg-surface", className)}
                {...props}
            >
                <motion.div
                    className="h-full w-full flex-1 bg-primary transition-all"
                    initial={{ x: "-100%" }}
                    animate={{ x: `-${100 - Math.min(100, Math.max(0, value))}%` }}
                    transition={{ ease: [0.16, 1, 0.3, 1], duration: 1 }}
                />
            </div>
        );
    }
);
Progress.displayName = "Progress";
