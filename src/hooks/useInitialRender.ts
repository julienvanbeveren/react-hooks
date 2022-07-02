import { useEffect, useRef } from 'react'

export function useInitialRender(callback: () => any, dependencies: []) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            callback()
            firstRenderRef.current = false
        }
        else return
    }, [...dependencies])
}

export function useNoInitialRender(callback: () => any, dependencies: []) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        else callback()
    }, [...dependencies])
}