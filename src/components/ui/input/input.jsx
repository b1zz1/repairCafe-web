import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef(
    (
        {
            className,
            type,
            size = 'full',
            leftIcon,
            rightIcon,
            error = false,
            ...props
        },
        ref
    ) => {
        const sizeClasses = {
            sm: 'w-40',
            full: 'w-full',
        }

        return (
            <div className={`relative ${sizeClasses[size]}`}>
                {leftIcon && (
                    <span
                        className={
                            'absolute inset-y-0 left-0 flex items-center pl-3'
                        }
                    >
                        {leftIcon}
                    </span>
                )}
                <input
                    type={type}
                    className={cn(
                        `flex h-12 w-full p-3 rounded-md border-2 bg-purple.3 text-base font-semibold shadow-sm transition-colors placeholder:font-medium placeholder:text-purple.4 placeholder:select-none focus-visible:outline-none focus-visible:ring-2 focus:ring-purple.5/70 disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium`,
                        {
                            'pl-10': leftIcon,
                            '!border-none': !error,
                            'bg-error.1/15 border-error.1 placeholder:text-error.1 focus:ring-error.1/70':
                                error,
                        },
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {rightIcon && (
                    <div
                        className={
                            'absolute inset-y-0 right-0 flex items-center pr-3 text-purple.5 text-lg'
                        }
                    >
                        {rightIcon}
                    </div>
                )}
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
