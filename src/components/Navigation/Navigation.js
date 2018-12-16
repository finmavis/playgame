import React from 'react';
import styled from 'styled-components';

import NavigationItem from './Item';

import { Container } from '../styles/Grid';
import { ReactComponent as Logo } from '../assets/icon/logo.svg';

const navData = [
  { name: 'games', path: '/games' },
  { name: 'about us', path: '/aboutus' },
  { name: 'team', path: '/team' },
  { name: 'partner', path: '/partner' },
  { name: <Logo />, path: '/' },
  { name: 'career', path: '/career' },
  { name: 'news', path: '/news' },
  { name: 'events', path: '/events' },
  { name: 'contact', path: '/contact' },
];

const NavigationStyle = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  background-color: transparent;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Navigation = props => (
  <NavigationStyle>
    <Container>
      <NavigationList>
        {navData.map((nav, i) => (
          <NavigationItem key={i} path={nav.path} name={nav.name} />
        ))}
      </NavigationList>
    </Container>
  </NavigationStyle>
);

export default Navigation;
