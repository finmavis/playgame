import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Quote } from '../assets/icon/icon_quote.svg';

const AboutStyle = styled.div`
  line-height: 2.4rem;
  font-size: 1.6rem;
  flex: 0 0 calc(100% / 3);
  text-align: right;
  margin-right: 5rem;

  p {
    position: relative;
  }

  svg {
    height: 7rem;
    width: 7rem;
  }

  .start {
    position: absolute;
    top: -3rem;
    left: -1rem;
  }

  .end {
    position: absolute;
    bottom: -2rem;
    right: -1rem;
    transform: rotate(180deg);
  }
`;

const About = props => (
  <AboutStyle>
    <p>
      <Quote className='start' />
      <strong>PlayGame Token is an ERC20 cryptocurrency token</strong> with
      smart contract platform enabling game publishers, developers and
      communities to monetise directly from cryptocurrency crowds all over the
      world.
      <Quote className='end' />
    </p>
  </AboutStyle>
);

export default About;
