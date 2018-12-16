import React from 'react';
import styled from 'styled-components';

import Oval from '../styles/Oval';

const EventItemStyle = styled.div`
  flex: 0 0 35rem;
  padding: 3rem 3rem 1.5rem;
  border-top: 1px solid ${props => props.theme.borderColor};

  & p {
    position: relative;
  }

  ${Oval} {
    position: absolute;
    left: 0;
    top: -4.7rem;
  }

  .date {
    margin-bottom: 3rem;
  }
`;

const EventItem = ({ date, description }) => (
  <EventItemStyle>
    <p className='date'>
      <Oval />
      <strong>{date}</strong>
    </p>
    <p>{description}</p>
  </EventItemStyle>
);

export default EventItem;
