import { configureStore } from '@reduxjs/toolkit'

import userReducer from './ducks/user'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
