import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavigationItemStyle = styled.li`
  list-style: none;
  text-align: center;

  a {
    font-family: ${props => props.theme.fontPoppins};
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.black};
    cursor: pointer;
    transition: all 0.2s;

    &:hover,
    &:active,
    &:focus {
      color: ${props => props.theme.orange};
    }
  }
`;

const NavigationItem = ({ path, name }) => (
  <NavigationItemStyle>
    <Link to={path}>{name}</Link>
  </NavigationItemStyle>
);

export default NavigationItem;
