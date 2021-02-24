import styled from 'styled-components'
import media from 'styled-media-query'

import background from '../../assets/background.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
  }

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`

export const LeftContent = styled.aside`
  width: 50%;
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(19, 5, 37, 1),
      rgba(105, 57, 153, 0)
    ),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${media.lessThan('small')`
    width: 100%;
    height: 50vh;
  `}
`

export const MainContent = styled.main`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.lessThan('medium')`
    width: 80%;
  `}

  ${media.lessThan('small')`
    width: 100%;
    height: 50vh;
    background: #130525;
  `}
`

export const MainWrapper = styled.div`
  width: 50%;

  ${media.lessThan('small')`
      position: absolute;
      width: 80%;
      height: 400px;
      background: ${props => props.theme.colors.background};
      padding: 28px;
      border-radius: 8px;
      top: 0; left: 0; bottom: 0; right: 0;
      margin: auto;

      h1 {
      font-size: 24px !important;
      line-height: 32px !important;
      text-align: center;
    }

    p {
      font-size: 12px !important;
      line-height: 20px !important;
      text-align: center;
      margin-left: -28px;
      margin-right: -28px;
    }

    form {
      margin: 0;

      label {
        font-size: 10px !important;
      }
    }
  `}
`

export const FormWrapper = styled.form`
  margin: 45px 0;
  display: flex;
  flex-direction: column;

  label {
    line-height: 48px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
  }
`

export const InputWrapper = styled.div`
  position: relative;

  input {
    display: inline-block;
    height: 48px;
    width: 100%;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 8px;
    color: ${props => props.theme.colors.primary};
    text-indent: 16px;

    ::placeholder {
      line-height: 48px;
      color: ${props => props.theme.colors.primary};
      opacity: 0.5;
    }

    :focus {
      outline: auto;
      outline-color: ${props => props.theme.colors.primary};
    }
  }

  span {
    position: absolute;
    right: 16px;
    top: 0;
    bottom: 0;
    line-height: 48px;
    font-size: 30px;
    cursor: pointer;
  }
`

export const Button = styled.input`
  height: 48px;
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

  :hover {
    opacity: 0.9;
  }

  ${media.lessThan('small')`
    width: 160px;
    align-self: center;
    box-shadow: none;
    position: absolute;
    bottom: -24px;
  `}
`