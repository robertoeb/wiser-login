import api from '../../services/api'
import { setError, setLogin } from '../ducks/auth'
import { setLoading } from '../ducks/loading'
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
      .catch(() => {
        dispatch(setLoading(false))
        dispatch(setError(true))
      })
  }
}
