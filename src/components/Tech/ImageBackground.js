import React from 'react';
import styled from 'styled-components';

import TechBg from '../assets/images/bg-behind-playgame.png';

const ImageStyle = styled.div`
  display: block;
  width: 100%;
  position: relative;
  transform: translateY(-4.2rem);

  img {
    display: block;
    width: 100%;
  }
`;

const ImageBackground = props => (
  <ImageStyle>
    <img src={TechBg} alt='Tech Behind PlayGame' />
  </ImageStyle>
);

export default ImageBackground;
