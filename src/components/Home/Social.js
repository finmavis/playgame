import React from 'react';
import styled from 'styled-components';

import ButtonOutline from '../styles/ButtonOutline';

import { ReactComponent as TeleIcon } from '../assets/icon/icon_telegram.svg';

const SocialStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Telegram = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6rem;

  svg {
    height: 4.5rem;
    width: 4.5rem;
    margin-right: 2rem;
  }

  h3 {
    font-size: 2.4rem;
    text-transform: uppercase;
  }
`;

const SocialLink = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
`;

const SocialItem = styled.div`
  &:not(:last-child) {
    margin-right: 5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  & ${ButtonOutline}:not(:last-child) {
    margin-right: 1rem;
  }
`;

const GroupButton = styled(ButtonOutline)`
  color: ${props => props.theme.blue};
  border-color: ${props => props.theme.blue};
`;

const ChannelButton = styled(ButtonOutline)`
  color: ${props => props.theme.orange};
  border-color: ${props => props.theme.orange};
`;

const Social = props => (
  <SocialStyle>
    <Telegram>
      <TeleIcon />
      <h3>join our telegram</h3>
    </Telegram>
    <SocialLink>
      <SocialItem>
        <p>group</p>
        <div>
          <GroupButton>eng</GroupButton>
          <GroupButton>ind</GroupButton>
        </div>
      </SocialItem>
      <SocialItem>
        <p>channel</p>
        <div>
          <ChannelButton>playgameico</ChannelButton>
        </div>
      </SocialItem>
    </SocialLink>
  </SocialStyle>
);

export default Social;
