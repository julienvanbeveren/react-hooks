import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import { usePrevState, usePersistentState } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const [testState, setTestState] = usePersistentState('thisIsKey', 'testtest')


    return (
        <>
            <input type="text" defaultValue={testState} onChange={e => setTestState(e.target.value)}/>
        </>
    )
})