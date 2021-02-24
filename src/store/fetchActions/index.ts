import api from '../../services/api'
import { setLogin } from '../ducks/auth'
import { setUser } from '../ducks/user'

interface PayloadInterface {
  username: string
  password: string
}

export const authenticate = (payload: PayloadInterface) => {
  return dispatch => {
    api
      .post('/authenticate', payload)
      .then(res => {
        dispatch(setUser(res.data))
        dispatch(setLogin())
      })
      .catch(err => err)
  }
}
