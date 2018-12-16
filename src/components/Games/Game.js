import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Thumbnail from './Thumbnail';
import Description from './Description';

const GameStyle = styled.div`
  flex: 0 0 calc((100% / 5) - 2rem);
  background-color: ${props => props.theme.white};
  border-radius: 2rem;
  box-shadow: 0px 0.4rem 0.6rem rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Game = ({ uri, name, thumbnail, description }) => (
  <GameStyle>
    <Thumbnail to={uri} title={name} image={thumbnail} />
    <Description to={uri} title={name} description={description} />
  </GameStyle>
);

Game.propTypes = {
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Game;
