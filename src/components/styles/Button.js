import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: ${props => props.theme.orange};
  padding: 2rem 6rem;
  text-align: center;
  text-decoration: none;
  border-radius: 2.5rem;
  outline: 0;
  text-transform: uppercase;
  border: 2px solid ${props => props.theme.orange};
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
`;

export default Button;
