import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
*{
  box-sizing: border-box;
}


  body {
    line-height: 1.5;
    font-size:14px;
    background-color: #fff;
  }

  ol, ul,li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: inherit;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }

  img {
    width:100%;
    height:100%;
    border:0 none;
  }
`;
