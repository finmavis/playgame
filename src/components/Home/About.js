import React from 'react';
import styled from 'styled-components';

import { Container } from '../styles/Grid';
import HeadingSection from '../styles/HeadingSection';

const AboutStyle = styled.div`
  padding-top: 20rem;
  padding-bottom: 10rem;
  font-family: inherit;
  font-size: 2rem;

  ${Container} {
    display: flex;
  }

  p {
    line-height: 3rem;
  }
`;

const About = props => (
  <AboutStyle>
    <Container>
      <HeadingSection>
        about <span>playgame</span>
      </HeadingSection>
      <p>
        To simplify marketing and distribution, we are creating playgame.com. A
        direct-to-play gaming platform where players can play HTML5 games
        directly from their desktop, mobile browser or even embedded on their
        own application. No application downloads required. Publishing your game
        to playgame.com is not mandatory. <br />
        <br /> We will also be launching a crypto-powered crowdfunding platform
        that we called the FunFund Initiative.
      </p>
    </Container>
  </AboutStyle>
);

export default About;
