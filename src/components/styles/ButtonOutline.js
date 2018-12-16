import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;
  border-radius: 10rem;
  outline: 0;
  text-transform: uppercase;
  border: 2px solid ${props => props.theme.grey};
  font-size: 1.6rem;
  font-weight: bold;
`;

export default Button;
