import { useState, useEffect } from 'react'

export function useClipboard() {

    function setClipboard(text: string) {
        navigator.clipboard.writeText(text)
    }

    return setClipboard

}