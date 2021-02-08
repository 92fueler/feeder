import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/NewsPanel'

import { HomeWrapper } from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <List />
      </HomeWrapper>
    )
  }
}

export default Home
