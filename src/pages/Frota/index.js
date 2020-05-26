import React, { useState } from 'react'
import { PlusOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import { PageWrapper, Input } from '../../components'
import * as S from './styled'

const FrotaPage = () => {
  const [veiculos] = useState([
    { id: 'testetesteteste', plate: 'TST0101' },
    { id: 'testetestetest', plate: 'TST1000' },
    { id: 'testetestetes', plate: 'TST1100' },
    { id: 'testetestete', plate: 'TST1011' },
    { id: 'testetestet', plate: 'TST1111' },
  ])

  return (
    <PageWrapper>
      <S.HeaderWrapper>
        <S.Title>Adicionar novo veiculo</S.Title>
        <S.InputWrapper>
          <Input type='text' width='85%' placeholder='Placa' />
          <S.SubmitButton>
            <PlusOutline color='#303960' width='2em' />
          </S.SubmitButton>
        </S.InputWrapper>
      </S.HeaderWrapper>
      <S.Divider />
      <S.HeaderWrapper height='80%'>
        <S.SubTitle>Veículos</S.SubTitle>
        <S.ListWrapper>
          {veiculos.map((veiculo, index) => (
            <S.ListItem
              key={veiculo.id}
              background={index % 2 === 0 ? '#e5e5e5' : '#D9D9D9'}
            >
              <S.ItemLabel>{veiculo.plate}</S.ItemLabel>
              <S.RemoveButton>
                <CloseOutline color='#e5e5e5' width='1.5em' />
              </S.RemoveButton>
            </S.ListItem>
          ))}
        </S.ListWrapper>
      </S.HeaderWrapper>
    </PageWrapper>
  )
}

export default FrotaPage
