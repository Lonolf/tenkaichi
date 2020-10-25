import * as React from 'react'
import ContentManager from 'views/contentManager/ContentManager'
import './App.css'
import { useActions } from 'overmind/index'
import ErrorBar from 'components/errorBar/ErrorBar'
import LoadingBar from 'components/loadingBar/LoadingBar'

const App = () => {
  const actions = useActions()
  React.useEffect(() => { actions.onStart() }, [actions])
  return (
    <>
      <ContentManager />
      <LoadingBar />
      <ErrorBar />
    </>
  )
}

export default App
