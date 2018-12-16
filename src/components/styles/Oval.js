import styled from 'styled-components';

const Oval = styled.span`
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => props.theme.orange};
`;

export default Oval;
