import React, { useState, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { setLoading } from '../../store/ducks/loading'

import { authenticate } from '../../store/fetchActions'

import {
  FormWrapper,
  InputWrapper,
  Error,
  SubmitButton,
  FormHelper
} from './styled'

const Form: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState(false)

  const loading = useSelector(state => state.loading, shallowEqual)
  const loginError = useSelector(state => state.auth.loginError, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => dispatch(setLoading(false)), [])

  const handleInput = e => {
    const { name, value, dataset } = e.target

    setForm({ ...form, [name || dataset.name]: value || '' })
    e.type === 'click' && setError(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!validateEmail()) {
      dispatch(setLoading(true))
      dispatch(authenticate(form))
    }
  }

  const validateEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const hasError = !emailRegex.test(form.username.toLowerCase())

    setError(hasError)
    return hasError
  }

  return (
    <>
      <h1>
        Olá, seja <br /> bem-vindo!
      </h1>
      <p>Para acessar a plataforma, faça seu login.</p>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="username">e-mail</label>
        <InputWrapper error={error}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="user.name@mail.com"
            value={form.username}
            onChange={handleInput}
            disabled={loading}
            onBlur={validateEmail}
          />
          {form.username.length > 0 && (
            <span data-name="username" onClick={handleInput}>
              &times;
            </span>
          )}
          {error && <Error>Digite um e-mail válido</Error>}
        </InputWrapper>
        <label htmlFor="password">senha</label>
        <InputWrapper>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            value={form.password}
            onChange={handleInput}
            disabled={loading}
          />
          {form.password.length > 0 && (
            <span data-name="password" onClick={handleInput}>
              &times;
            </span>
          )}
        </InputWrapper>
        {loginError && (
          <Error center>
            Falha ao tentar logar!
            <br /> Tente novamente mais tarde.
          </Error>
        )}
        <SubmitButton
          type="submit"
          disabled={
            loading || !form.username.length || !form.password.length || error
          }
        >
          entrar
        </SubmitButton>
      </FormWrapper>
      <FormHelper>
        Esqueceu seu login ou senha?
        <br /> Clique <a href="#">aqui</a>
      </FormHelper>
    </>
  )
}

export default Form
