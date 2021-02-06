import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
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

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">Home</NavItem>
        <NavItem className="left">Download App</NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
