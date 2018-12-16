import React from 'react';
import styled from 'styled-components';

import ButtonOutline from '../styles/ButtonOutline';

const NewsItemStyle = styled.div`
  flex: 0 0 27.5rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ImageWrap = styled.div`
  display: block;

  img {
    display: block;
    width: 100%;
  }
`;

const ReadMore = styled(ButtonOutline)`
  color: ${props => props.theme.orange};
  border-color: ${props => props.theme.orange};
  padding: 0.75rem 2.5rem;
  font-size: 1.2rem;
`;

const NewsItem = ({ id, image, description }) => (
  <NewsItemStyle>
    <ImageWrap>
      <img src={image} alt='News' />
    </ImageWrap>
    <p>{description}</p>
    <ReadMore>read more</ReadMore>
  </NewsItemStyle>
);

export default NewsItem;
