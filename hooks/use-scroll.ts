'use client'

import { useCallback, useEffect, useState } from 'react';

/**
 * Hook for scroll position tracking
 */
export function useScroll(): { y: number; isAtTop: boolean; isAtBottom: boolean } {
    const [scroll, setScroll] = useState({ y: 0, isAtTop: true, isAtBottom: false })

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = window.innerHeight

        setScroll({
            y: scrollY,
            isAtTop: scrollY < 50,
            isAtBottom: scrollY + clientHeight >= scrollHeight - 50,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return scroll
}
