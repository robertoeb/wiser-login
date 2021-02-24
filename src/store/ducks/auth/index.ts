import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin: () => ({ isAuthenticated: true }),
    setLogout: () => ({ isAuthenticated: false })
  }
})

export const { setLogin, setLogout } = userSlice.actions

export default userSlice.reducer
