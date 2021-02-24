import React, { useEffect } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import { Container, Avatar } from './styled'
import { Button } from '../StyledComponents/index'

import { setLoading } from '../../store/ducks/loading'
import { setLogout } from '../../store/ducks/auth'

const Profile: React.FC = () => {
  const { name, avatar, email } = useSelector(state => state.user, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => dispatch(setLoading(false)), [])

  const handleLogout = () => {
    dispatch(setLoading(true))
    dispatch(setLogout())
  }

  return (
    <Container>
      <Avatar src={avatar} alt="" />
      <h1>{name}</h1>
      <p>{email}</p>
      <Button type="button" value="sair" onClick={handleLogout} />
    </Container>
  )
}

export default Profile
