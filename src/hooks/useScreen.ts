import { useState, useEffect } from 'react'
import { useThrottle } from '../hooks'


interface Screen {
    name: string
    maxWidth?: number
    minWidth?: number
    maxHeight?: number
    minHeight?: number
}

export function useScreen(screens: Screen[]) {

    const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight])
    const [screen, setScreen] = useState<string>('')

    useEffect(() => {
        window.addEventListener('resize', (e: any) => {
            setScreenSize([window.innerWidth, window.innerHeight])
        })
        return () => {
            window.removeEventListener('resize', (e: any) => {})
        }
    }, [])

    useThrottle(() => {
        const sortedScreens = screens?.sort((a, b) => {
            let aprops: number = 0
            let bprops: number = 0
            Object.keys(a).forEach(key => aprops++)
            Object.keys(b).forEach(key => bprops++)
            return bprops - aprops
        })
        sortedScreens?.forEach((screen: any) => {
            let tempScreenName = screen.name
            delete screen.name
            for (const prop of Object.keys(screen)) {
                switch(prop) {
                    case 'maxWidth':
                        if (screenSize[0] > screen[prop]) { 
                            return 
                        } break
                    case 'minWidth':
                        if (screenSize[0] < screen[prop]) {
                            return 
                        } break
                    case 'maxHeight':
                        if (screenSize[1] > screen[prop]) {
                            return 
                        } break
                    case 'minHeight':
                        if (screenSize[1] < screen[prop]) { 
                            return 
                        } break
                }
                setScreen(tempScreenName)
            }
        })
    }, [screenSize], 100)


    return { width: screenSize[0], height: screenSize[1], screen: screen }

}