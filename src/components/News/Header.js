import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeadingSection from '../styles/HeadingSection';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
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
  <HeaderStyle>
    <HeadingSection>
      playgame <span>news</span>
    </HeadingSection>
    <CustomLink to='/'>more news ></CustomLink>
  </HeaderStyle>
);

export default Header;
