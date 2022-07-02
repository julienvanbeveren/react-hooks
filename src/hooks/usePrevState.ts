import { useState } from 'react'

export function usePrevState(initialValue: any = undefined) {
    const [state, updateValue] = useState(initialValue)
    const [previousState, setPreviousState] = useState(undefined)

    function setState(value: any) {
        setPreviousState(state)
        updateValue(value)
    }
    return [state, previousState, setState]
}