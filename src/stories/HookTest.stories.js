import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, useThrottle, useClipboard } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const setClipboard = useClipboard()

    const [input, setInput] = useState('')

    return (
        <>
            <input type="text" defaultValue={input} onChange={e => setClipboard(e.target.value)}/>
            <div>cp: {clipboard}</div>
        </>
    )
})