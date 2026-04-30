/**
 * SVG Icon utilities and icon registry
 */
import React from 'react'

export interface IconProps {
    className?: string
    size?: number
    fill?: string
    stroke?: string
}

export const SVG_ICONS = {
    target: {
        viewBox: '0 0 24 24',
        path: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    code: {
        viewBox: '0 0 24 24',
        path: 'M10 20l4-16m4 4l4 4m0 0l-4 4m4-4H3',
    },
    users: {
        viewBox: '0 0 24 24',
        path: 'M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20a9 9 0 0118 0v2H6v-2z',
    },
    book: {
        viewBox: '0 0 24 24',
        path: 'M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.001m0 0a8.987 8.987 0 016.5-2.684c2.326 0 4.539.911 6.5 2.684m0 0a8.987 8.987 0 006.5-2.684c3.649 0 7 3.686 7 8.235',
    },
    arrow: {
        viewBox: '0 0 24 24',
        path: 'M13 7l5 5m0 0l-5 5m5-5H6',
    },
    github: {
        viewBox: '0 0 24 24',
        path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    linkedin: {
        viewBox: '0 0 24 24',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.931-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.134-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
    },
    email: {
        viewBox: '0 0 24 24',
        path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    },
    external: {
        viewBox: '0 0 24 24',
        path: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m-6 0L21 3m0 0v6m0-6h-6',
    },
}

export function createSvgIcon(iconName: keyof typeof SVG_ICONS, props?: IconProps): React.ReactNode {
    const icon = SVG_ICONS[iconName]
    if (!icon) return null

    const { className = 'w-6 h-6', size = 24, fill = 'none', stroke = 'currentColor' } = props || {}

    return React.createElement('svg', {
        className,
        viewBox: icon.viewBox,
        fill,
        stroke,
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        width: size,
        height: size,
    }, React.createElement('path', { d: icon.path }))
}

export function getIconByName(iconName: string): React.ReactNode {
    const validName = iconName as keyof typeof SVG_ICONS
    return SVG_ICONS[validName] ? createSvgIcon(validName) : createSvgIcon('target')
}
