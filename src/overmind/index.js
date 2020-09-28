import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react'
import state from './state'
import actions from './actions'
import effects from './effects'

export const config = {
  state,
  actions,
  effects,
}

export const useOState = createStateHook()
export const useActions = createActionsHook()
export const useEffects = createEffectsHook()
export const useReaction = createReactionHook()
