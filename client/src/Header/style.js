import styled from "styled-components";
import px2vw from "../utils/pw2vw";
import logoPic from "../static/logo.png";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;
  border-bottom: ${px2vw(1)} solid #f0f0f0;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Logo = styled.a.attrs({ href: "/" })`
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: ${px2vw(7)};

  @media (min-width: 768px) {
    width: ${px2vw(100)};
    min-height: ${px2vw(56)};
    height: 100%;
    margin-right: 100px;
  }
`;

export const NavButton = styled.button`
  border: ${px2vw(1)} solid #ec6149;

  &.home,
  &.login {
    color: #ec6149;
  }

  &.signup {
    color: #fff;
    background: #ec6149;
  }

  @media (min-width: 320) {
    width: ${px2vw(320, 320)};
    height: ${px2vw(26, 320)};
    border-radius: ${px2vw(13, 320)};
    padding: 0 ${px2vw(20, 320)};
    font-size: 1rem;
  }

  @media (min-width: 768) {
    width: ${px2vw(320, 768)};
    height: ${px2vw(26, 768)};
    border-radius: ${px2vw(13, 768)};
    padding: 0 ${px2vw(20, 768)};
    font-size: 1rem;
    margin-left: ${px2vw(30, 768)}
    margin-right:  ${px2vw(30, 768)};
  }

  @media (min-width: 1024px) {
    height: ${px2vw(30)};
    line-height: ${px2vw(30)};
    border-radius: ${px2vw(15)};
    padding: 0 ${px2vw(20)};
    font-size: 1rem;
    margin-left: ${px2vw(30)};
    margin-right: ${px2vw(30)};
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  border: none;
  outline: none;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }

  @media (min-width: 320) {
    width: ${px2vw(320, 320)};
    height: ${px2vw(26, 320)};
    border-radius: ${px2vw(13, 320)};
    font-size: 1rem;
  }

  @media (min-width: 768) {
    width: ${px2vw(150, 768)};
    height: ${px2vw(30, 768)};
    padding: 0 ${px2vw(10, 768)};
    border-radius: ${px2vw(15, 768)};
    font-size: 1rem;
    margin-left: ${px2vw(80, 768)};
    margin-right: ${px2vw(80, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200)};
    height: ${px2vw(30)};
    padding: 0 ${px2vw(20)};
    border-radius: ${px2vw(15)};
    font-size: 1rem;
    margin-left: ${px2vw(150)};
    margin-right: ${px2vw(150)};
  }
`;
