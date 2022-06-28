import { LogoLk } from "../LogoLk";
import { Social } from "../Social";

import {
  HeaderContainer,
} from './style';

export function Header() {
  return(
    <HeaderContainer>
      <LogoLk />
      <Social />
    </HeaderContainer>
  )
}