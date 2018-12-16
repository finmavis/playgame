import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from '../styles/Grid';
import HeadingSection from '../styles/HeadingSection';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 7rem;

  p {
    font-size: 5rem;
    text-transform: uppercase;
    margin-right: auto;
  }
`;

const CustomLink = styled(Link)`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.orange};
  text-transform: uppercase;
  text-decoration: none;
`;

const Header = props => (
  <Container>
    <HeaderStyle>
      <HeadingSection>
        event <span>calendar</span>
      </HeadingSection>
      <p>november</p>
      <CustomLink to='/'>more events ></CustomLink>
    </HeaderStyle>
  </Container>
);

export default Header;
