import { ChartBar, Clock} from 'phosphor-react';
import BootcampLogo from '../../../assets/logo-bootcamp.png';

import { 
  HeroContainer,
  DetailWrapper,
  TitleAndIfosWrapper,
  InfosWrapper,
  AboutWrapper
} from './style';

export function Hero() {
  return(
    <HeroContainer>
      <DetailWrapper>
        <img src={BootcampLogo} alt="logo do Bootcamp" />
        
        <TitleAndIfosWrapper>
          <h1>Bootcamp Impulso JavaScript Evolution</h1>
          <InfosWrapper>
            <div>
              <ChartBar weight="light" />
              avançado
            </div>
            <div>
              <Clock weight="light" />
              107hrs
            </div>
          </InfosWrapper>
        </TitleAndIfosWrapper>
      </DetailWrapper>

      <AboutWrapper>
        O bootcamp Impulso JavaScript Evolution é um programa de recrutamento de devs de todo o Brasil e diferentes níveis técnicos para trabalhar na Impulso de forma 100% remota. O Impulso JavaScript Evolution é para qualquer dev que tem como foco evoluir em uma jornada Fullstack e alcançar outro patamar na carreira. São dezenas de oportunidades de contratação para profissionais que querem elevar seu nível técnico. 
      </AboutWrapper>
    </HeroContainer>
  )
}