import { useEffect } from 'react'

export function useDebounce(callback: () => any, dependency: [any], delay: number) {
    
    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            callback()
        }, delay)
        return () => {
            clearTimeout(timeoutHandler)
        }
    }, [...dependency])
}