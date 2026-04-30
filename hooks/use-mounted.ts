'use client'

import { useSyncExternalStore } from 'react'

let isMountedStore = false

/**
 * Hook to detect if component is mounted (for client-side only features)
 */
export function useMounted(): boolean {
    return useSyncExternalStore(
        (onStoreChange) => {
            isMountedStore = true
            onStoreChange()
            return () => { }
        },
        () => isMountedStore,
        () => false,
    )
}
