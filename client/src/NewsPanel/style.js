import styled from "styled-components";
import px2vw from "../utils/pw2vw";

export const NewsPanelContainer = styled.div`
  margin: ${px2vw(10)} auto;

  @media (min-width: 768px) {
    width: 60%;
  }
`;
