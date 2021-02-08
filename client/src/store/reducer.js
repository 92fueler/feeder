import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../components/Header/store/index'
import { reducer as homeReducer } from '../pages/Home/store/index'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
})

export default reducer
