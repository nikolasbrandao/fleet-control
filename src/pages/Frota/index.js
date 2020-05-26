import React, { useState, useEffect } from 'react'
import { PlusOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import * as FrotaService from '../../services/FrotaService'

import { PageWrapper, Input } from '../../components'
import * as S from './styled'

const FrotaPage = () => {
  const [velhices, setVelhices] = useState([])
  const [plate, setPlate] = useState()

  useEffect(() => {
    FrotaService.getAllVelhices()
      .then(({ data }) => {
        setVelhices(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmitButton = async () => {
    const {
      data: { data: velhice },
    } = await FrotaService.addVelhice(plate)
    setVelhices([...velhices, velhice])
  }

  return (
    <PageWrapper>
      <S.HeaderWrapper>
        <S.Title>Adicionar novo veiculo</S.Title>
        <S.InputWrapper>
          <Input
            type='text'
            width='85%'
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder='Placa'
          />
          <S.SubmitButton onClick={handleSubmitButton}>
            <PlusOutline color='#303960' width='2em' />
          </S.SubmitButton>
        </S.InputWrapper>
      </S.HeaderWrapper>
      <S.Divider />
      <S.HeaderWrapper height='80%'>
        <S.SubTitle>Veículos</S.SubTitle>
        <S.ListWrapper>
          {velhices.map((velhice, index) => (
            <S.ListItem
              key={velhice.id}
              background={index % 2 === 0 ? '#e5e5e5' : '#D9D9D9'}
            >
              <S.ItemLabel>{velhice.plate}</S.ItemLabel>
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
