import React, { Component } from "react";
import {
  HeaderContainer,
  Logo,
  HomeButton,
  NavSearch,
  Nav,
  NavButton,
} from "./style";
class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo />
        <HomeButton>Home</HomeButton>
        <NavSearch />
        <Nav>
          <NavButton>Login</NavButton>
          <NavButton className="signup">Sign Up</NavButton>
        </Nav>
      </HeaderContainer>
    );
  }
}

export default Header;
