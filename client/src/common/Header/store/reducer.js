import * as constants from './constants'
import { fromJS } from 'immutable'

// immutable object
const defaultState = fromJS({
  focused: false,
})

const reducer = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}

export default reducer
