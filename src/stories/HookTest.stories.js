import React from 'react'
import { storiesOf } from '@storybook/react'

import { usePrevState } from '../hooks/usePrevState'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    function handleChange(date) {
        console.log(date)
    }


    return (
    <div></div>
    )
})