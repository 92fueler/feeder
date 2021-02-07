import styled from 'styled-components'
import logoPic from '../../static/logo.png'

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

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 350px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
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
