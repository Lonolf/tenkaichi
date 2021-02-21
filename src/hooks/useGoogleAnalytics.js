import React from 'react'
import ReactGA from 'react-ga'

import { useLocation } from 'react-router-dom'

const TRACKING_ID = 'UA-170927813-1'

function init() {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ReactGA.initialize(TRACKING_ID, { debug: isDev })
}

export function sendEvent(payload) {
  ReactGA.event(payload)
}

function sendPageview(path) {
  ReactGA.set({ page: path })
  ReactGA.pageview(path)
}

export default function useGoogleAnalytics() {
  const location = useLocation()

  React.useEffect(() => {
    init()
  }, [])

  React.useEffect(() => {
    const currentPath = location.pathname + location.search
    sendPageview(currentPath)
  }, [location])
}

const callback = list => {
  list.getEntries().forEach(entry => {
    ReactGA.timing({
      category: 'Load Performace',
      variable: 'Server Latency',
      value: entry.responseStart - entry.requestStart,
    })
    ReactGA.timing({
      category: 'Load Performace',
      variable: 'Download Time',
      value: entry.responseEnd - entry.responseStart,
    })
    ReactGA.timing({
      category: 'Load Performace',
      variable: 'Total App Load Time',
      value: entry.responseEnd - entry.requestStart,
    })
  })
}

const observer = new PerformanceObserver(callback)
observer.observe({ entryTypes: ['navigation'] })
