import React, { Component } from "react";
import { HeaderContainer, Logo, NavButton, NavSearch } from "./style";
class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo />
        <NavButton className="home">Home</NavButton>
        <NavSearch />
        <NavButton className="login">Login</NavButton>
        <NavButton className="signup">Sign Up</NavButton>
      </HeaderContainer>
    );
  }
}

export default Header;
