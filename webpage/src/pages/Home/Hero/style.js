import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeroContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`
export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    width: 12rem;
  }
  
  
  @media screen and (min-width: 700px) {
    img {
      width: 16rem;
    }
  }
  
  @media screen and (min-width: 1100px) {
    flex-direction: row;
    gap: 4rem;

    img {
      width: 18rem;
    }

  }
`;

export const TitleAndIfosWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .8rem;

  h1 {
    color: ${colors.highlightColor200};
    font-size: 1.8rem;
  }

  @media screen and (min-width: 700px) {
    h1 {
      font-size: 2rem;
    }
  }
  
  @media screen and (min-width: 1100px) {
    h1 {
      font-size: 2.8rem;
    }
    
  }
`;

export const InfosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  div {
    color: ${colors.primaryColor100};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  @media screen and (min-width: 700px) {
    div {
      font-size: 1.6rem;
    }
  }
  
  @media screen and (min-width: 1100px) {
    div {
      font-size: 1.8rem;
    }
  }
`;

export const AboutWrapper = styled.p`
  color: ${colors.primaryColor100};
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2rem;
  
  @media screen and (min-width: 700px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 1100px) {
    max-width: 70rem;
    margin: auto;
  }
`