import { useEffect, useState } from 'react'


export function useFetch<T>(url: string, options?: RequestInit) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()
    const [data, setData] = useState<T | undefined>(undefined)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error(response.status.toString())
                }
                const data = await response.json()
                setData(data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        })()
    }, [])

    return { loading, error, data }
}