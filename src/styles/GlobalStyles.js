import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color } from './color'

const globalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color:inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${color.$grey01};
    height: 100%;
  }

  div#root {
    height: 100%;
  }
`;

export default globalStyles;