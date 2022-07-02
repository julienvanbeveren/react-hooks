import { useState, useEffect } from 'react'

function getPersistedValue(key: string, initialValue: any) {
    const localStoredState = localStorage.getItem(key)
    if (localStoredState) {
        try {
            const persistedState = JSON.parse(localStoredState)
            if (persistedState) return persistedState
        } catch (err) {}
        return localStoredState
    }
    return initialValue
}


export function useLocalStorage(key: string, initialValue: any = undefined) {
    const [state, setState] = useState(getPersistedValue(key, initialValue))

    const localStorageEvent = new Event('storage')

    useEffect(() => {
        window.addEventListener('storage', () => {
            const localStoredState = localStorage.getItem(key)
            if (localStoredState) {
                try {
                    const persistedState = JSON.parse(localStoredState)
                    if (persistedState != state) {
                        setState(persistedState)
                        return
                    }
                } catch (err) {}
                if (localStoredState != state) {
                    setState(localStoredState)
                    return
                }
            }
            return initialValue
        })
    }, [])

    useEffect(() => {
        localStorage.setItem(key, state)
        window.dispatchEvent(localStorageEvent)
    }, [state])

    return [state, setState]
}