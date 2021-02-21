import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import slicers from './slicers'
import callableFunctions from './functions'

export let functions = callableFunctions
export let actions = slicers.reduce((list, slicer) => ({ ...list, ...slicer.actions }), {})
const reducer = slicers.reduce((list, slicer) => ({ ...list, [slicer.name]: slicer.reducer }), {})

export const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== 'production',
})

if (process.env.REACT_APP_ENV !== 'production' && module.hot) {
  module.hot.accept('./slicers', () => {
    try {
      const slicers = require('./slicers').default
      const newRootReducer = combineReducers(slicers.reduce((list, slicer) => ({ ...list, [slicer.name]: slicer.reducer }), {}))
      actions = slicers.reduce((list, slicer) => ({ ...list, ...slicer.actions }), {})
      store.replaceReducer(newRootReducer)
    } catch (error) {
      call(functions.createError, { error })
    }
  })
  module.hot.accept('./functions', () => {
    try {
      functions = require('./functions').default
    } catch (error) {
      call(functions.createError, { error })
    }
  })
}

export const dispatch = (callable, payload) => {
  try {
    if (typeof callable === 'function')
      store.dispatch(callable(payload))
    else if (typeof actions?.[callable] === 'function')
      store.dispatch(actions[callable](payload))
    else
      throw new Error(`Action "${JSON.stringify(callable?.name ?? callable)}" not existing`)
  } catch (error) {
    call(functions.createError, { error })
  }
}

export const call = async(callable, payload = {}) => {
  let response = false
  dispatch(actions.startLoading, ({ loadingId: callable?.name }))
  if (process.env.REACT_APP_ENV !== 'production') {
    dispatch(actions.debug, payload)
    console.log('called ' + callable.name, payload)
  }
  try {
    const { getState } = store
    if (typeof callable === 'function')
      response = await callable({ ...payload, actions, dispatch, getState, call, functions })
    else if (typeof functions?.[String(callable)] === 'function')
      response = await functions[callable]({ ...payload, actions, dispatch, getState, call, functions })
    else
      throw new Error(`Function "${String(callable)}" not existing`)
  } catch (error) {
    call(functions.createError, { error })
  }
  dispatch(actions.stopLoading, callable.name)
  return response
}

const onStart = async() => {
}

onStart()
