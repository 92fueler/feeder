import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalResetStyle } from './style'
import store from './store'

import Header from './common/Header/index'

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <GlobalResetStyle />
          <Header />
        </Provider>
      </>
    )
  }
}

export default App
