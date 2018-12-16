import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const baseURL = 'https://playgame.com/game';

const DescriptionStyle = styled.div`
  padding: 1.5rem 1.5rem 2rem;

  .game-description {
    font-size: 1.5rem;
    color: ${props => props.theme.grey};
  }
`;

const GameTitle = styled.a`
  display: block;
  font-size: 1.8rem;
  color: ${props => props.theme.solidBlack};
  margin-bottom: 1rem;
  text-decoration: none;
`;

const Description = ({ to, title, description }) => (
  <DescriptionStyle>
    <GameTitle href={baseURL + to}>
      <strong>{title}</strong>
    </GameTitle>
    <p className='game-description'>{description.substring(0, 70)}</p>
  </DescriptionStyle>
);

Description.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Description;
