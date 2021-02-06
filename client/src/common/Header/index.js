import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button,
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
          </SearchWrapper>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
          <Button className="writting">
            <box-icon name="pen"></box-icon>
            Publish
          </Button>
          <Button className="reg">Sign Up</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState({
      focused: true,
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false,
    })
  }
}

export default Header
