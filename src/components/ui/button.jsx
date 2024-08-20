import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300',
    {
        variants: {
            variant: {
                default: 'bg-purple.5 text-purple.1 shadow hover:bg-purple.6',
                destructive:
                    'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
                outline:
                    'border-2 border-purple.4 text-purple.5 bg-white shadow-sm hover:border-purple.4 hover:bg-purple.6/10 hover:text-purple.6',
                secondary:
                    'bg-purple.5/20 shadow-sm hover:bg-purple.5/40',
                ghost: 'hover:bg-purple.5/10 hover:text-purple.5 hover:font-semibold',
                link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-8 rounded-md px-3 text-xs',
                md: 'h-9 rounded-md px-5',
                lg: 'h-10 rounded-md px-8',
                icon: 'h-12 w-12',
                avatar: 'h-10 w-10',
                select: 'px-3 py-2',
                full: 'w-full h-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }),
                    {
                        'rounded-full': size === 'avatar',
                    }
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
