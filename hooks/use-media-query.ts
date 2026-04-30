'use client'

import { useSyncExternalStore } from 'react'

/**
 * Hook to detect screen size and responsive breakpoints
 */
export function useMediaQuery(query: string): boolean {
    return useSyncExternalStore(
        (onStoreChange) => {
            const mediaQueryList = window.matchMedia(query)
            mediaQueryList.addEventListener('change', onStoreChange)
            return () => mediaQueryList.removeEventListener('change', onStoreChange)
        },
        () => window.matchMedia(query).matches,
        () => false,
    )
}

export function useIsMobile(): boolean {
    return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet(): boolean {
    return useMediaQuery('(max-width: 1024px)')
}

export function useIsDesktop(): boolean {
    return useMediaQuery('(min-width: 1024px)')
}
