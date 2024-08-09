import * as React from "react"

import IconCafe from "@/components/ui/iconCafe"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, size="full", leftIcon, rightIcon, ...props }, ref) => {
    const sizeClasses = {
        sm: "w-40",
        full: "w-full",
    }

    return (
        <div className={`relative ${sizeClasses[size]}`}>
            {leftIcon && (
                <div className={"flex items-center absolute inset-y-0 left-1.5 h-full"}>
                    <IconCafe Icon={leftIcon}/>
                </div>
            )}
            <input
                type={type}
                className={cn(
                  "flex h-12 w-full px-2 py-1 rounded-md border-none bg-purple.3 text-base font-semibold shadow-sm transition-colors placeholder:font-medium placeholder:text-purple.4 focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium", {"pl-12": leftIcon},
                  className
                )}
                ref={ref}
                {...props}
            />
            {rightIcon && (
                <div className={"flex items-center absolute inset-y-0 right-1.5 h-full"}>
                    <IconCafe Icon={rightIcon}/>
                </div>
            )}
        </div>
    )
})
Input.displayName = "Input"

export { Input }
