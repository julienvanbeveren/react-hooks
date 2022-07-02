import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, usePersistentState, useLocalStorage } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const [input, setInput] = useState('')
    const [debouncedValue, setDebouncedValue] = useState('')

    useDebounce(() => {
        setDebouncedValue(input)
    }, [input], 200)

    return (
        <>
            <input type="text" defaultValue={input} onChange={e => setInput(e.target.value)}/>
            <div>{debouncedValue}</div>
        </>
    )
})