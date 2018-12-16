import styled from 'styled-components';

const HeadingSection = styled.h2`
  font-family: inherit;
  font-size: 4rem;
  color: ${props => props.theme.black};
  text-transform: uppercase;
  text-align: right;
  margin-right: 4rem;

  span {
    display: block;
    color: ${props => props.theme.orange};
  }
`;

export default HeadingSection;
