import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SocialContainer = styled.div`
  font-size: 3.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    color:${colors.highlightColor500};
    transition: all .4s ease;
  }

  a {
    &:hover {
      color: ${colors.highlightColor400};
    }
  }

  @media screen and (min-width: 700px) {
    font-size: 3.6rem;
  }
  
  @media screen and (min-width: 1100px) {
    font-size: 4rem;
  }
`