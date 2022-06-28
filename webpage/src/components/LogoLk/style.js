import styled from "styled-components";
import { colors } from '../../styles/colors';

export const Logo = styled.a`
  color: ${colors.highlightColor500};
  font-family: 'Orbitron', sans-serif;
  font-size: 3.2rem;
  
  transition: all .4s ease;
  &:hover {
    color: ${colors.highlightColor400};
  }
  
  @media screen and (min-width: 700px) {
    font-size: 3.6rem;
  }
  
  @media screen and (min-width: 1100px) {
    font-size: 4rem;
  }
`