import styled from 'styled-components'
import logoPic from '../../static/logo.png'
// import { SearchAlt } from '@styled-icons/boxicons-regular'

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/',
})`
  position: absolute;
  top: 0;
  left: 10%;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 60%;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
    margin-left: 30px;
  }
  &.right {
    float: right;
    color: #969696;
    margin-right: 30px;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  width: 200px;
  height: 38px;
  margin-left: 30px;
`

export const NavSearch = styled.input.attrs({
  placeholder: 'Search',
})`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200%;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 200%;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 100%;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 10%;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-siz: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
