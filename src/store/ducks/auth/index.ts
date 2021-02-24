import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  isAuthenticated: false,
  loginError: false
}

const authSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: state => ({ ...state, isAuthenticated: true }),
    setLogout: state => ({ ...state, isAuthenticated: false }),
    setError: (state, actions) => ({ ...state, loginError: actions.payload })
  }
})

export const { setLogin, setLogout, setError } = authSlice.actions

export default authSlice.reducer
