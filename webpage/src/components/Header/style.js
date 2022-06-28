import styled from "styled-components";
import { colors } from "../../styles/colors";

export const HeaderContainer = styled.header`
  height: 6rem;
  padding: 0 2rem;
  background-color: ${colors.primaryColor900};
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media screen and (min-width: 700px) {
    height: 8rem;
    padding: 0 8rem;
  }

  @media screen and (min-width: 1100px) {
    padding: 0 32rem;
  }
`;
