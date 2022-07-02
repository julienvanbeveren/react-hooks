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

export function usePersistentState(key: string, initialValue: any = undefined) {
    const [state, setState] = useState(getPersistedValue(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, state)
    }, [state])

    return [state, setState]
}