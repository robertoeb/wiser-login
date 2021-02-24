import React, { useState, useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import { authenticate } from '../../store/fetchActions'

import { FormWrapper, InputWrapper, Button, FormHelper } from './styled'

const Form: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const user = useSelector(state => state.user, shallowEqual)
  const dispatch = useDispatch()

  const handleInput = e => {
    const { name, value, dataset } = e.target

    setForm({ ...form, [name || dataset.name]: value || '' })
    setError(false)
  }

  const handleSubmit = e => {
    validateEmail()
    setLoading(true)
    e.preventDefault()

    dispatch(authenticate(form))
  }

  const validateEmail = () => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    setError(!emailRegex.test(form.username.toLowerCase()))
  }

  useEffect(() => setLoading(false), [user])

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="email">e-mail</label>
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
          {error && <p>Digite um e-mail válido</p>}
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
        <Button
          type="submit"
          value="entrar"
          disabled={
            loading || !form.username.length || !form.password.length || error
          }
        />
      </FormWrapper>
      <FormHelper>
        Esqueceu seu login ou senha?
        <br /> Clique <a href="#">aqui</a>
      </FormHelper>
    </>
  )
}

export default Form
