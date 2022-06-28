import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const EvolutionContainer = styled.section`
  h2 {
    font-size: 2.4rem;
    color: ${colors.primaryColor100};
    margin-bottom: 2rem;
    
    span {
      color: ${colors.highlightColor200};
      margin-left: .8rem;
    }
    
    @media screen and (min-width: 700px) {
      max-width: 70rem;
      margin: auto;
      margin-bottom: 2rem;
      h2 {
        font-size: 2.8rem;
      }
    }
    
    @media screen and (min-width: 1100px) {
      h2 {
        font-size: 3.2rem;
      }

    }
  }
`

export const ActivitiesListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  position: relative;

  @media screen and (min-width: 700px) {
    max-width: 70rem;
    margin: auto;
  }
`