import { Evolution } from "../Evolution";
import { Hero } from "./Hero";
import { HomeContainer } from './style';

export function Home() {
  return(
    <HomeContainer>
      <Hero />
      <Evolution />
    </HomeContainer>
  )
}