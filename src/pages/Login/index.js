import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CarGarage } from '@styled-icons/boxicons-solid/CarGarage'

import * as LoginService from '../../services/LoginService'

import { PageWrapper, Input } from '../../components'
import * as S from './styled'

const LoginPage = () => {
  let history = useHistory()
  const [email, setEmail] = useState('frontend-dev@easycarros.com')
  const [password, setPassword] = useState('Fr0nt3ndR0ck5!')

  const submitLogin = async () => {
    try {
      const {
        data: {
          data: { token },
        },
      } = await LoginService.login(email, password)
      localStorage.setItem('@fleet-control/token', `Bearer ${token}`)
      history.push('/veiculos')
    } catch (error) {
      console.log(error.response.status)
    }
  }

  return (
    <PageWrapper>
      <S.Title align='center'>Fleet Car</S.Title>
      <CarGarage color='#303960' width='8em' />
      <S.InputWrapper>
        <S.Title>Login</S.Title>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Senha'
        />
      </S.InputWrapper>
      <S.Button onClick={submitLogin}>Entrar</S.Button>
    </PageWrapper>
  )
}

export default LoginPage
