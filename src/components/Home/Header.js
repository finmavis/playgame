import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 5rem;
  line-height: 7.5rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  margin: 16rem auto;

  .heading-bold {
    display: block;
    font-weight: 500;
    font-size: 6rem;
  }
`;

const Header = props => (
  <Heading>
    powering real economy in the{' '}
    <span className='heading-bold'>gaming world</span>
  </Heading>
);

export default Header;
