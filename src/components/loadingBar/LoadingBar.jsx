import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import { useOState } from 'overmind/index'

const LoadingBar = () => {
  const loading = useOState().loading

  return (loading || []).length > 0 && (
    <CircularProgress
      variant='indeterminate'
      size={75}
      style={{
        position: 'fixed',
        bottom: 25,
        right: 25,
        zIndex: 2000,
      }}
    />
  )
}

export default LoadingBar
