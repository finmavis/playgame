import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Social from './Social';
import About from './About';

import background from '../assets/images/bg-home.png';

const HomeStyle = styled.section`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${background}) no-repeat center;
  background-size: cover;
  margin-top: -6rem;
  color: ${props => props.theme.black};
`;

const Home = props => (
  <HomeStyle>
    <Header />
    <Social />
    <About />
  </HomeStyle>
);

export default Home;
