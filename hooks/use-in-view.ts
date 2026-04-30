'use client'

import React, { useEffect, useState } from 'react'

/**
 * Hook for smooth scroll animations
 */
export function useInView(options?: IntersectionObserverInit): [React.RefObject<HTMLDivElement | null>, boolean] {
    const ref = React.useRef<HTMLDivElement>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        }, { threshold: 0.1, ...options })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [options])

    return [ref, inView]
}
