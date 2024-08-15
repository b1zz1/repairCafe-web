import React from 'react'

import { cn } from '@/lib/utils'

const IconCafe = ({
    Icon,
    size = 'sm',
    background = false,
    color,
    error = false,
}) => {
    const sizeClasses = {
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '5rem',
    }

    const colorClasses = {
        white: 'text-white.2',
        purple: 'text-purple.5/70',
    }

    return (
        <>
            {background && (
                <Icon size={`${sizeClasses[size]}`} className={'bg-purple.6'} />
            )}
            {!background && (
                <Icon
                    size={`${sizeClasses[size]}`}
                    className={cn(`${colorClasses[color]}`, {
                        'text-error.1': error,
                    })}
                />
            )}
        </>
    )
}

export default IconCafe
