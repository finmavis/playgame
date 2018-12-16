import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import NewsItem from './Item';

import { Container } from '../styles/Grid';

// Delete later
import { fakeNews } from '../../helpers/fakeData';

const NewsStyle = styled.section`
  font-family: inherit;
  font-size: 1.6rem;
  color: ${props => props.theme.black};
  padding: 5rem 0;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 1.5rem;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const News = props => (
  <NewsStyle>
    <Container>
      <Header />
      <Content>
        {fakeNews().map(news => (
          <NewsItem
            key={news.id}
            id={news.id}
            description={news.description}
            image={news.image}
          />
        ))}
      </Content>
    </Container>
  </NewsStyle>
);

export default News;
