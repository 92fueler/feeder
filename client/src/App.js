import React, { Component } from 'react'
import Header from './common/Header/index'
// import NewsPanel from "./NewsPanel/index";

import { GlobalResetStyle } from './style'

class App extends Component {
  render() {
    return (
      <>
        <GlobalResetStyle />
        <Header />
        {/* <NewsPanel /> */}
      </>
    )
  }
}

export default App
