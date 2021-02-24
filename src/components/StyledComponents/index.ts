import styled from 'styled-components'

export const Button = styled.input`
  height: 48px;
  width: 100%;
  margin-top: 24px;
  background: linear-gradient(
    to left,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 99.18%
  );
  box-shadow: 0px 10px 25px #cf99db;
  border: none;
  border-radius: 8px;
  color: ${props => props.theme.colors.bright};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  transition: opacity 1s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
