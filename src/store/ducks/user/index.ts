import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  id: '',
  name: '',
  avatar: '',
  email: '',
  birthDate: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, actions) => actions.payload
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
