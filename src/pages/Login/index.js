import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import * as LoginService from '../../services/LoginService'
import Validators from '../../utils/Validators'
import { PageWrapper, FormInput, ToastWrapper } from '../../components'
import * as S from './styled'

const MIN_LENGTH = 3

const LoginPage = () => {
  let history = useHistory()
  const [email, setEmail] = useState('frontend-dev@easycarros.com')
  const [password, setPassword] = useState('Fr0nt3ndR0ck5!')

  const submitLogin = async () => {
    try {
      const emailValid = Validators.correctEmail(email).isValid
      const passwordValid = Validators.minimalLength(MIN_LENGTH)(password)
        .isValid
      if (emailValid && passwordValid) {
        const {
          data: {
            data: { token },
          },
        } = await LoginService.login(email, password)
        localStorage.setItem('@fleet-control/token', `Bearer ${token}`)
        history.push('/veiculos')
      } else {
        toast.warn('Preencha suas informações')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Email ou senha incorretos')
      } else {
        toast.error('Tivemos um erro, por favor tente mais tarde')
      }
    }
  }

  return (
    <PageWrapper>
      <S.Title align='center'>Fleet Car</S.Title>
      <S.CarIcon />
      <S.InputWrapper>
        <S.Title>Login</S.Title>
        <FormInput
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          validations={[Validators.correctEmail]}
        />
        <FormInput
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Senha'
          validations={[Validators.minimalLength(MIN_LENGTH)]}
        />
      </S.InputWrapper>
      <S.Button onClick={submitLogin}>Entrar</S.Button>
      <ToastWrapper />
    </PageWrapper>
  )
}

export default LoginPage
