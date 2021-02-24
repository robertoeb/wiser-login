import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = false

const loadingSlicer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      return action.payload
    }
  }
})

export const { setLoading } = loadingSlicer.actions

export default loadingSlicer.reducer
