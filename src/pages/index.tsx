import React from 'react'
import Head from 'next/head'
import { shallowEqual, useSelector } from 'react-redux'

import {
  Container,
  LeftContent,
  MainContent,
  MainWrapper,
  Spinner,
  SpinnerContainer
} from '../styles/pages/Home'

import Form from '../components/Form'
import Profile from '../components/Profile'

const Home: React.FC = () => {
  const loading = useSelector(state => state.loading, shallowEqual)
  const { isAuthenticated } = useSelector(state => state.auth, shallowEqual)

  return (
    <Container>
      <Head>
        <title>Login Wizer Educação</title>
      </Head>

      <LeftContent />
      <MainContent>
        {loading && (
          <SpinnerContainer id="loading">
            <Spinner />
          </SpinnerContainer>
        )}
        <MainWrapper>{isAuthenticated ? <Profile /> : <Form />}</MainWrapper>
      </MainContent>
    </Container>
  )
}

export default Home
