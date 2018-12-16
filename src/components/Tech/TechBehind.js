import React from 'react';
import styled from 'styled-components';

import Button from '../styles/Button';

const TechBehindStyle = styled.div`
  font-size: 4rem;
  flex: 0 0 calc((100% / 3) * 2);
  text-transform: uppercase;
  transform: translateY(-12rem);

  span {
    color: ${props => props.theme.orange};
    display: block;
  }

  & ${Button} {
    margin-top: 3rem;
  }

  & ${Button}:not(:last-child) {
    margin-right: 2rem;
  }
`;

const TechBehind = props => (
  <TechBehindStyle>
    <p>
      curious about
      <br /> technologies behind <span>playgame?</span>
    </p>
    <Button>one pager</Button>
    <Button>white paper</Button>
  </TechBehindStyle>
);

export default TechBehind;
