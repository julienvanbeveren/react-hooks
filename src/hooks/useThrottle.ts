import { useEffect, useState, useRef } from 'react'

export function useThrottle(callback: () => any, dependency: any[], delay: number) {

    const [shouldWait, setShouldWait] = useState(false)
    let waitingCallback = useRef<(() => any) | null>(null)


    const timeoutFunction = () => {
        if (!waitingCallback.current) {
            setShouldWait(false)
            return

        } 
        else {
            waitingCallback.current?.()
            waitingCallback.current = null
            setTimeout(timeoutFunction, delay)
        }
    }


    useEffect(() => {
        if (shouldWait) {
            waitingCallback.current = callback
            return
        }
        else {
            setShouldWait(true)
            callback()
    
            setTimeout(timeoutFunction, delay)
        }

    }, [...dependency])

}
