import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${colors.primaryColor500};
  }
  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`