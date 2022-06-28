import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HomeContainer = styled.main`
  padding: 0 2rem;
  margin-top: 4rem;

  @media screen and (min-width: 700px) {
    padding: 0 8rem;
  }

  @media screen and (min-width: 1100px) {
    padding: 0 20rem;
  }
`;