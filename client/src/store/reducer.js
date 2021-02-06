import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/Header/store/index'

const reducer = combineReducers({
  header: headerReducer,
})

export default reducer
