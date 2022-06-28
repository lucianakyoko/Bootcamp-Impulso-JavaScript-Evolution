import { ChartBar, Clock } from 'phosphor-react';
import { 
  ActivityCardContainer,
  CardTitlesWrapper,
  CartDetailsWrapper,
  Category,
  Infos,
  Status
} from './style';

export function ActivityCard() {
  return(
    <ActivityCardContainer>
      <CardTitlesWrapper>
        <h3>Modulo I - Princípios de Desenvolvimento de Software</h3>
        <p>Introdução à Programação e Pensamento Computacional</p>
      </CardTitlesWrapper>

      <CartDetailsWrapper>
        <Category color='#0598C6'>curso</Category>
        <Infos>
          <span>
            <ChartBar weight="light" />
            Básico
          </span>
          <span>
            <Clock weight="light" />
            5hrs
          </span>
        </Infos>
        <Status color='#05C669'>concluído</Status>
      </CartDetailsWrapper>
    </ActivityCardContainer>
  )

}