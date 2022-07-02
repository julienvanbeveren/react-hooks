import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, useThrottle, useLocalStorage } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const [input, setInput] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')
    const [throttleValue, setThrottleValue] = useState('')

    useDebounce(() => {
        setDebouncedValue(input)
    }, [input], 2000)

    useThrottle(() => {
        setThrottleValue(input)
    }, [input], 2000)

    return (
        <>
            <input type="text" defaultValue={input} onChange={e => setInput(e.target.value)}/>
            <div>debounce: {debouncedValue}</div>
            <div>throttle: {throttleValue}</div>
        </>
    )
})