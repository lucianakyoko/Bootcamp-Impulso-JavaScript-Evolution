import { TrendUp } from "phosphor-react";
import { ActivityCard } from './ActivityCard';

import {
  EvolutionContainer,
  ActivitiesListWrapper,
} from './style';

export function Evolution() {
  return(
    <EvolutionContainer>
      <h2>
        Evolution
        <span>
          <TrendUp weight="light" />
        </span>
      </h2>

      <ActivitiesListWrapper>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </ActivitiesListWrapper>
    </EvolutionContainer>
  )
}