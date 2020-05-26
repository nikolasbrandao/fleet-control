import React from 'react'
import * as S from './styled'
import { CarGarage } from '@styled-icons/boxicons-solid/CarGarage'

const LoginPage = () => {
  return (
    <S.PageWrapper>
      <S.Title align='center'>Fleet Car</S.Title>
      <CarGarage color='#303960' width='8em' />
      <S.InputWrapper>
        <S.Title>Login</S.Title>
        <S.Input type='email' name='email' placeholder='Email' />
        <S.Input type='password' name='password' placeholder='Senha' />
      </S.InputWrapper>
      <S.Button>Entrar</S.Button>
    </S.PageWrapper>
  )
}

export default LoginPage
