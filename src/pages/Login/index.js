import React from 'react'
import { useHistory } from 'react-router-dom'
import { CarGarage } from '@styled-icons/boxicons-solid/CarGarage'

import { PageWrapper, Input } from '../../components'
import * as S from './styled'

const LoginPage = () => {
  let history = useHistory()

  const submitLogin = () => {
    history.push('/frota')
  }

  return (
    <PageWrapper>
      <S.Title align='center'>Fleet Car</S.Title>
      <CarGarage color='#303960' width='8em' />
      <S.InputWrapper>
        <S.Title>Login</S.Title>
        <Input type='email' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Senha' />
      </S.InputWrapper>
      <S.Button onClick={submitLogin}>Entrar</S.Button>
    </PageWrapper>
  )
}

export default LoginPage
