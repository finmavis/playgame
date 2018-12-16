import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Facebook } from '../assets/icon/icon_facebook.svg';
import { ReactComponent as Youtube } from '../assets/icon/icon_youtube.svg';
import { ReactComponent as Twitter } from '../assets/icon/icon_twitter.svg';
import { ReactComponent as Medium } from '../assets/icon/icon_medium.svg';
import { ReactComponent as Mail } from '../assets/icon/icon_mail.svg';

const SocialStyle = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  svg {
    width: 4rem;
    height: 4rem;
  }
`;

const MailBox = styled.div`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.black};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 2rem;
  padding: 0.9rem 1.5rem;

  svg {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
`;

const Social = props => (
  <SocialStyle>
    <a href='/'>
      <Facebook />
    </a>
    <a href='/'>
      <Youtube />
    </a>
    <a href='/'>
      <Twitter />
    </a>
    <a href='/'>
      <Medium />
    </a>
    <a href='/'>
      <MailBox>
        <Mail />
        SUBSCRIBE HERE
      </MailBox>
    </a>
  </SocialStyle>
);

export default Social;
