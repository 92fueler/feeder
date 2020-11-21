import React, { Component } from "react";
import { HeaderWrapper, Logo, Button } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Button className="signin">Sign In</Button>
        <Button className="signup">Sign Up</Button>
      </HeaderWrapper>
    );
  }
}

export default Header;
