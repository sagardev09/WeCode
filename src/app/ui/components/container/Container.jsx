import clsx from 'clsx'
import React from 'react'

export const Container = ({ children, className }) => {
    return (
        <div className={clsx(
            "max-w-7xl w-full mx-auto  lg:px-10 px-5",
            className,
        )}>
            {children}
        </div>
    )
}

