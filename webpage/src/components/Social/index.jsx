import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { SocialContainer } from './style';

export function Social() {
  return(
    <SocialContainer>
      <a 
        href="https://github.com/lucianakyoko" 
        target="_blank" 
        rel="noopener noreferrer"
        title='Github'
      >
        <GithubLogo weight="light" />
      </a>
      <a 
        href="https://www.linkedin.com/in/lucianakyoko/" 
        target="_blank" 
        rel="noopener noreferrer"
        title='Linkedin'
      >
        <LinkedinLogo weight="light" />
      </a>
    </SocialContainer>
  )
}