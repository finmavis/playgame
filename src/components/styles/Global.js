import { createGlobalStyle } from 'styled-components';

const theme = {
  solidBlack: '#000',
  black: '#4A4A4A',
  grey: '#9B9B9B',
  greyBackground: '#F8F8F8',
  borderColor: 'rgba(151, 151, 151, 0.25)',
  orange: '#FF9532',
  blue: '#2FA6DA',
  white: '#fff',
  fontRoboto: `'Roboto', sans-serif`,
  fontPoppins: `'Poppins', sans-serif`,
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:600|Roboto|Rubik:300,400,500');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    @media screen and (max-width: 992px) {
      font-size: 56.25%;
    }

    @media screen and (max-width: 576px) {
      font-size: 50%;
    }
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
export { theme };
