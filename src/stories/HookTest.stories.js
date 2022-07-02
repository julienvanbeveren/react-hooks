import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, useThrottle, useScreen } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const { screen, width } = useScreen(
        [
            { name: 'default', maxWidth: 1000, minWidth: 500 },
            { name: 'mobile', maxWidth: 500 }
        ]
    )

    if (screen == 'mobile') {
        return <>mobile device</>
    }

    return (
        <>
        default render
        </>
    )
})