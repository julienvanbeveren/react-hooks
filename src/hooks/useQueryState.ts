import { useEffect, useState } from 'react'

export function useQueryState(name: string) {
  
  const params = new URLSearchParams(window.location.search)
  const [state, setState] = useState<string>(params.get(name) || '')


  useEffect(() => {
    const url = new URL(window.location.pathname + window.location.search)
    const search_params = url.searchParams
    if (state == '') {
      search_params.delete(name)
    }
    else {
      search_params.set(name, state)
    }
    url.search = search_params.toString()
    const new_url = url.toString() + window.location.hash
    window.history.replaceState({}, document.title,  new_url)
  }, [state])

  return [state, setState]

}