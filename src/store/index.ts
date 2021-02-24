import { configureStore } from '@reduxjs/toolkit'

import userReducer from './ducks/user'
import loadingReducer from './ducks/loading'
import authReducer from './ducks/auth'

export default configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    auth: authReducer
  }
})
