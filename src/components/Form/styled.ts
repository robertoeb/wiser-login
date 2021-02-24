import styled from 'styled-components'
import media from 'styled-media-query'

import { Button } from '../StyledComponents/index'
interface InputWrapperProps {
  error?: boolean | void
}

interface ErrorProps {
  center?: boolean | void
}

export const FormWrapper = styled.form`
  margin: 45px 0;
  display: flex;
  flex-direction: column;

  label {
    margin-left: 8px;
    line-height: 48px;
    font-weight: normal;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
  }
`

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;

  input {
    display: inline-block;
    height: 48px;
    width: 100%;
    border: 1px solid
      ${props =>
        props.error ? props.theme.colors.error : props.theme.colors.text};
    border-radius: 8px;
    color: ${props => props.theme.colors.primary};
    text-indent: 16px;

    &::placeholder {
      line-height: 48px;
      color: ${props => props.theme.colors.primary};
      opacity: 0.5;
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
    color: ${props => props.error && props.theme.colors.error};
  }
`
export const Error = styled.p<ErrorProps>`
  font-size: 10px !important;
  font-weight: 400 !important;
  margin-left: ${props => (props.center ? '0' : '8px')};
  color: ${props => props.theme.colors.error};
  text-align: ${props => (props.center ? 'center' : 'left')};
`

export const SubmitButton = styled(Button)`
  ${media.lessThan('small')`
    width: 160px !important;
    align-self: center;
    box-shadow: none;
    position: absolute;
    bottom: -24px;
  `}
`

export const FormHelper = styled.p`
  margin-top: 24px;
  font-size: 15px !important;
  line-height: 20px !important;
  font-weight: 400 !important;
  text-align: center;

  ${media.lessThan('small')`
    color: ${props => props.theme.colors.bright};
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -92px;

    a {
      color: ${props => props.theme.colors.bright}
    }
  `}
`
