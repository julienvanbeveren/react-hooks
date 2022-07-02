import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import { usePrevState } from '../hooks/usePrevState'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const [testState, prevTestState, setTestState] = usePrevState()

    useEffect(() => {
        setTestState('test')
    }, [])

    useEffect(() => {
        console.log('state:' + testState)
        console.log('prevSate:' + prevTestState)
    }, [testState])


    return (
    <div onClick={() => {setTestState('test2')}}>click me</div>
    )
})