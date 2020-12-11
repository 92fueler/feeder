import styled from "styled-components";
import px2vw from "../utils/pw2vw";
import logoPic from "../static/logo.png";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${px2vw(56)};
  margin: ${px2vw(32)};
  max-width: 100%;
  border-bottom: ${px2vw(1)} solid #f0f0f0;
`;

export const Logo = styled.a.attrs({ href: "/" })`
  width: ${px2vw(110)};
  height: 100%;
  margin: auto;
  background: url(${logoPic});
  background-size: contain;
`;

export const HomeButton = styled.button`
  height: ${px2vw(28)};
  line-height: ${px2vw(28)};
  margin: auto;
  padding: 0 ${px2vw(20)};
  font-size: ${px2vw(12)};
  border-radius: ${px2vw(19)};
  border: ${px2vw(1)} solid #ec6149;
  color: #ec6149;
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  width: ${px2vw(360)};
  height: ${px2vw(28)};
  margin: auto;
  padding: 0 ${px2vw(20)};
  border: none;
  outline: none;
  border-radius: ${px2vw(19)};
  background: #eee;
  font-size: ${px2vw(12)};
  color: #777;
  &::placeholder {
    color: #999;
  }
`;

export const Nav = styled.div`
  width: ${px2vw(200)};
  height: ${px2vw(28)};
  display: flex;
  justify-content: space-evenly;
  line-height: ${px2vw(28)};
  font-size: ${px2vw(12)};
  margin: auto;
`;

export const NavButton = styled.button`
  height: ${px2vw(28)};
  line-height: ${px2vw(28)};
  margin: auto;
  padding: 0 ${px2vw(20)};
  font-size: ${px2vw(12)};
  border-radius: ${px2vw(19)};
  border: ${px2vw(1)} solid #ec6149;
  color: #ec6149;
  &.signup {
    color: #fff;
    background: #ec6149;
  }
`;
