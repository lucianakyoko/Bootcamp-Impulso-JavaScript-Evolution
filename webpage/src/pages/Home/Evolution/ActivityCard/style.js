import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const ActivityCardContainer = styled.li`
  background-color: ${colors.primaryColor900};
  border-radius: .4rem;
  border: 2px solid ${colors.primaryColor900};
  
  padding: 1.6rem;
  
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  
  transition: all .4s ease;
  &:hover {
    cursor: pointer;
    border: 2px solid ${colors.highlightColor200};
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));
  }

  @media screen and (min-width: 700px) {
    padding: 1.8rem;
  }
  
  @media screen and (min-width: 1100px) {
    padding: 2.4rem 6.4rem;
  }
`;

export const CardTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h3 {
    color: ${colors.primaryColor100};
    font-size: 1.6rem;
    text-align: center;
  }
  
  p {
    color: ${colors.primaryColor100};
    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
  }
  
  @media screen and (min-width: 700px) {
    h3 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1.4rem;
    }
  }
  
  @media screen and (min-width: 1100px) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export const CartDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.span`
  padding: .4rem .8rem;
  color: ${props => props.color};
  font-size: 1.2rem;
  border-radius: .4rem;
  border: 2px solid ${props => props.color};
  
  @media screen and (min-width: 700px) {
    font-size: 1.4rem;
  }
  
  @media screen and (min-width: 1100px) {
    font-size: 1.6rem;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  span {
    color: ${colors.primaryColor100};
    font-size: 1.2rem;
    
    display: flex;
    align-items: center;
    gap: .8rem;
  }
  
  @media screen and (min-width: 700px) {
    span {
      font-size: 1.4rem;
    }
  }
  
  @media screen and (min-width: 1100px) {
    span {
      font-size: 1.6rem;
    }
  }
`;

export const Status = styled.span`
  color: ${props => props.color};
  font-size: 1.2rem;
  
  @media screen and (min-width: 700px) {
    font-size: 1.4rem;
  }
  
  @media screen and (min-width: 1100px) {
    font-size: 1.6rem;

  }
`