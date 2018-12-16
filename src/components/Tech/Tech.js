import React from 'react';
import styled from 'styled-components';

import ImageBackground from './ImageBackground';
import About from './About';
import TechBehind from './TechBehind';

import { Container } from '../styles/Grid';

const TechStyle = styled.section`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.greyBackground};
`;

const Content = styled.div`
  font-family: inherit;
  margin-top: 5rem;

  & ${Container} {
    display: flex;
  }
`;

const Tech = props => (
  <TechStyle>
    <ImageBackground />
    <Content>
      <Container>
        <About />
        <TechBehind />
      </Container>
    </Content>
  </TechStyle>
);

export default Tech;
