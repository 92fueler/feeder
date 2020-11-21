import styled from "styled-components";
import logoPic from "../static/logo.png";

export const HeaderWrapper = styled.div``;

export const Logo = styled.div`
  width: 250px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Button = styled.div`
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.signin {
    color: #ec6149;
  }
  &.signup {
    color: #fff;
    background: #ec6149;
  }
`;
