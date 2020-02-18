import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './media';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3rem;
    line-height: 1.3;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    ${breakpoint.lessThan('tablet')`
      font-size: 56.25%;
    `}
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    line-height: 1.4;
    color: #170c3a;
    background-color: #fafafa;
  }
`;
