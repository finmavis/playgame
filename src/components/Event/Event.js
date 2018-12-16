import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import EventItem from './Item';

// Delete this later
import { fakeEvents } from '../../helpers/fakeData';

const EventStyle = styled.section`
  font-family: inherit;
  font-size: 2rem;
  color: ${props => props.theme.black};
  padding: 5rem 0 10rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-top: 2rem;
  overflow-x: scroll;
`;

const Event = props => (
  <EventStyle>
    <Header />
    <Content>
      {fakeEvents().map(event => (
        <EventItem
          key={event.id}
          date={event.date}
          description={event.description}
        />
      ))}
    </Content>
  </EventStyle>
);

export default Event;
