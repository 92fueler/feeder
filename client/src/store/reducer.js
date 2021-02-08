import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../components/Header/store/index'
import { reducer as homeReducer } from '../pages/Home/store/index'
import { reducer as loginReducer } from '../pages/Login/store/index'
// import { reducer as signupReducer } from '../pages/Signup/store/index'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  login: loginReducer,
})

export default reducer
