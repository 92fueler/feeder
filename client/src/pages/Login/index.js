import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="Enter your username"
              innerRef={(input) => {
                this.account = input
              }}
            />
            <Input
              placeholder="Enter your password"
              type="password"
              innerRef={(input) => {
                this.password = input
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              Login
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.login.get('login'),
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem) {
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  },
})

export default connect(mapState, mapDispatch)(Login)
