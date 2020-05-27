import React, { useState, useEffect } from 'react'
import { PlusOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import * as FrotaService from '../../services/FrotaService'
import { PageWrapper, FormInput } from '../../components'
import Validators from '../../utils/Validators'
import * as S from './styled'

const MIN_LENGTH = 7

const FrotaPage = () => {
  const [velhices, setVelhices] = useState([])
  const [plate, setPlate] = useState()

  useEffect(() => {
    const fecthData = async () => {
      const {
        data: { data },
      } = await FrotaService.getAllVelhices()
      setVelhices(data)
    }
    fecthData()
  }, [])

  const handleSubmitButton = async () => {
    try {
      const plateValid = Validators.minimalLength(MIN_LENGTH)(plate)
      if (plateValid) {
        const {
          data: { data: velhice },
        } = await FrotaService.addVelhice(plate)
        setVelhices([...velhices, velhice])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteButton = async (id) => {
    try {
      await FrotaService.removeVelhice(id)
      const newVelhices = velhices.filter((velhice) => velhice.id !== id)
      setVelhices(newVelhices)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageWrapper margin='0em'>
      <S.HeaderWrapper>
        <S.Title>Adicionar novo veiculo</S.Title>
        <S.InputWrapper>
          <FormInput
            type='text'
            width='85%'
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder='Placa'
            validations={[Validators.minimalLength(MIN_LENGTH)]}
          />
          <S.SubmitButton onClick={handleSubmitButton}>
            <PlusOutline color='#303960' width='2em' />
          </S.SubmitButton>
        </S.InputWrapper>
      </S.HeaderWrapper>
      <S.HeaderWrapper height='80%'>
        <S.SubTitle>Veículos</S.SubTitle>
        <S.ListWrapper>
          {velhices.map((velhice, index) => (
            <S.ListItem
              key={velhice.id}
              background={index % 2 === 0 ? '#e5e5e5' : '#D9D9D9'}
            >
              <S.ItemLabel>{velhice.plate}</S.ItemLabel>
              <S.RemoveButton onClick={() => handleDeleteButton(velhice.id)}>
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
