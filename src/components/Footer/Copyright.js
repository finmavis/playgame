import React from 'react';
import styled from 'styled-components';

const CopyrightStyle = styled.div`
  font-family: ${props => props.theme.fontRoboto};
  font-size: 1.4rem;
  color: ${props => props.theme.grey};
  margin-top: 4rem;
`;

const Copyright = props => (
  <CopyrightStyle>
    <p>&copy; 2018 PlayGame Ltd. All rights reserved.</p>
    <p>All trademarks are property of their respective owners.</p>
  </CopyrightStyle>
);

export default Copyright;
