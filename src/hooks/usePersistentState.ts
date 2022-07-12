import { useState, useEffect } from 'react'

function getPersistedValue<T>(key: string, initialValue: T) {
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

export function usePersistentState<T>(key: string, initialValue: any = undefined) {
    const [state, setState] = useState<T>(getPersistedValue<T>(key, initialValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}