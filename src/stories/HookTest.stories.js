import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, useThrottle, useScreen, useFetch } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const { loading, error, data } = useFetch('https://raw.githubusercontent.com/julienvanbeveren/react-datetime-picker/master/tsconfig.json')

    if (loading) {
        return <>loading</>
    }

    if (error) {
        console.log(error)
        return <>error</>
    }

    console.log(data)
    return (
        <>
        default render
        </>
    )
})