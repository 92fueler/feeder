import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalResetStyle } from './style'
import store from './store'

import Header from './components/Header/index'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
// import Signup from './pages/Signup/index'
class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <div>
            <GlobalResetStyle />
            <Header />
            <BrowserRouter>
              <div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
                {/* <Route path="/signup" exact component={Signup}></Route> */}
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </>
    )
  }
}

export default App
