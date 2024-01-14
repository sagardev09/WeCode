"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"


export const Activelink = ({ href, children }) => {

    const pathname = usePathname()

    const isActive = useMemo(() => {
        return pathname === href
    }, [pathname, href])

    return (
        <Link href={href} className={clsx(isActive && "text-primary font-medium")}>{children}</Link>
    )
}

