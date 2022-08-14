import React, { useEffect, useState } from 'react'
import { storiesOf } from '@storybook/react'

import { useDebounce, useThrottle, useScreen, useFetch, useQueryState__experimental } from '../hooks'

const stories = storiesOf('useHookTest', module)

stories.add('useHook', () => {

    const [name, setName] = useQueryState__experimental('username')

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <>
        <input defaultValue={name} onChange={(e) => { setName(e.target.value) }} type="text" />
        </>
    )
})