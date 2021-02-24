import React from 'react'
import Head from 'next/head'

import {
  Container,
  LeftContent,
  MainContent,
  MainWrapper
} from '../styles/pages/Home'

import Form from '../components/Form'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Login Wizer Educação</title>
      </Head>

      <LeftContent />
      <MainContent>
        <MainWrapper>
          <h1>
            Olá, seja <br /> bem-vindo!
          </h1>
          <p>Para acessar a plataforma, faça seu login.</p>
          <Form />
        </MainWrapper>
      </MainContent>
    </Container>
  )
}

export default Home
