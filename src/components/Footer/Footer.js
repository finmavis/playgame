import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Copyright from './Copyright';
import Social from './Social';

import { Container } from '../styles/Grid';

const FooterStyle = styled.footer`
  background-color: ${props => props.theme.white};
  font-family: inherit;
  font-size: 1.5rem;
  padding: 10rem 0;
  text-align: center;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: ${props => props.theme.orange};
    text-transform: uppercase;
  }
`;

const Footer = props => (
  <FooterStyle>
    <Content>
      <Link to='/'>privacy policy</Link>
      <Social />
      <Link to='/'>terms &amp; conditions</Link>
    </Content>
    <Copyright />
  </FooterStyle>
);

export default Footer;
