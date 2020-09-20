import { useEffect, useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

export function useKeyPress(callback) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  const downHandler = event => {
    savedCallback.current(event)
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return true
}

export function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export const useUpdateParams = () => {
  const history = useHistory()
  const location = useLocation()
  return ({ target, value, targets, pathname, addId, removeId }) => {
    let currentUrlParams = new URLSearchParams(location.search)

    if (target != null)
      if (value !== '')
        currentUrlParams.set(target, value)
      else
        currentUrlParams.delete(target)

    for (let t in targets)
      if (targets[t] != null && targets[t] !== '')
        currentUrlParams.set(t, targets[t])
      else
        currentUrlParams.delete(t)

    if (pathname != null)
      history.push({ pathname, search: currentUrlParams.toString() })
    if (addId != null)
      history.push({ pathname: '/' + location.pathname.split('/')[1] + '/' + addId, search: currentUrlParams.toString() })
    else if (removeId)
      history.push({ pathname: '/' + location.pathname.split('/')[1], search: currentUrlParams.toString() })
    else
      history.push({ search: currentUrlParams.toString() })
  }
}
