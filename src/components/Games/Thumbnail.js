import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const baseURL = 'https://playgame.com/game';

const ThumbnailStyle = styled.div`
  img {
    display: block;
    width: 100%;
  }
`;

const Thumbnail = ({ title, image, to }) => (
  <ThumbnailStyle>
    <a href={baseURL + to}>
      <img src={image} alt={title} />
    </a>
  </ThumbnailStyle>
);

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Thumbnail;
