import styled from "styled-components";
import px2vw from "../utils/pw2vw";

export const NewsCardContainer = styled.div`
  display: flex;
  flew-wrap: no-wrap;
  justfiy-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    padding: ${px2vw(10)};
  }
`;

export const NewsIntro = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 70%;
    height: 100%;
  }- 
`;

export const NewsTitle = styled.h4`
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const NewsBrief = styled.p`
  @media (min-width: 768px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const NewsDescription = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    min-height: ${px2vw(50)};
    font-size: 1.5rem;
  }
`;

export const DescriptionItem = styled.span`
  display: inline-block;
  margin-right: ${px2vw(10)};
  font-size: 1rem;
  color: #fff;

  &.time {
    background: #a9c9eb;
  }

  &.source {
    background: #f4aa3e;
  }

  &.reason {
    background: #e45f51;
  }

  @media (min-width: 768px) {
    padding: ${px2vw(1, 768)} ${px2vw(5, 768)};
    border-radius: ${px2vw(8)};
  }
  }
`;

export const NewsImage = styled.img`
  @media (min-width: 768px) {
    width: 30%;
    min-height: ${px2vw(100)};
    height: 100%;
  }
`;
