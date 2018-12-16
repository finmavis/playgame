import React, { Component } from 'react';
import styled from 'styled-components';

import Game from './Game';

import { getGames } from '../../helpers/api';

import { Container } from '../styles/Grid';
import HeadingSection from '../styles/HeadingSection';
import Button from '../styles/Button';

const GamesStyle = styled.section`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${props => props.theme.black};
  padding: 8rem 0 5rem;
  background-color: ${props => props.theme.greyBackground};
  position: relative;
`;

const GameList = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: 2rem;
`;

const MoreGames = styled.div`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;

  a {
    text-decoration: none;
    color: ${props => props.theme.orange};
    text-transform: uppercase;
    margin-left: auto;
  }
`;

const StartFun = styled(HeadingSection)`
  text-align: center;
  margin: 3rem 0;
`;

const PlayGameButton = styled(Button)`
  position: absolute;
  bottom: -3.25rem;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: ${props => props.theme.white};
    text-decoration: none;
  }
`;

class Games extends Component {
  state = {
    loading: false,
    games: [],
  };

  async componentDidMount() {
    this.toggleLoading();
    const games = await getGames();
    this.setState({ games });
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    const { games } = this.state;
    return (
      <GamesStyle>
        <Container>
          <GameList>
            {games.map(game => (
              <Game
                key={game.id}
                id={game.id}
                uri={game.uri}
                name={game.name}
                thumbnail={game.picture.thumbnail}
                description={game.description}
              />
            ))}
          </GameList>
          <MoreGames>
            <a href='https://playgame.com/games'>more games ></a>
          </MoreGames>
          <StartFun>let the fun begin</StartFun>
          <PlayGameButton>
            <a href='https://playgame.com/games'>play the game</a>
          </PlayGameButton>
        </Container>
      </GamesStyle>
    );
  }
}

export default Games;
