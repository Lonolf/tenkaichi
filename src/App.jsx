import * as React from 'react'
import ContentManager from 'views/contentManager/ContentManager'
import './App.css'
import { useActions } from 'overmind/index'

const App = () => {
  const actions = useActions()
  React.useEffect(() => { actions.onStart() }, [actions])
  return <ContentManager />
}

export default App
