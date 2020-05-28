import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as FrotaService from '../../services/FrotaService'
import Validators from '../../utils/Validators'
import { PageWrapper, FormInput, ToastWrapper } from '../../components'
import * as S from './styled'

const PLATE_LENGTH = 7

const FrotaPage = () => {
  let history = useHistory()
  const [velhices, setVelhices] = useState([])
  const [plate, setPlate] = useState('')

  useEffect(() => {
    const fecthData = async () => {
      const {
        data: { data },
      } = await FrotaService.getAllVelhices()
      setVelhices(data || [])
    }
    fecthData()
  }, [])

  const handleSubmitButton = async () => {
    try {
      const plateValid =
        Validators.minimalLength(PLATE_LENGTH)(plate).isValid &&
        Validators.maximalLength(PLATE_LENGTH)(plate).isValid
      if (plateValid) {
        const {
          data: { data: velhice },
        } = await FrotaService.addVelhice(plate)
        setVelhices([...velhices, velhice])
        setPlate('')
        toast.success('Veiculo adicionado com sucesso')
      } else {
        toast.warn('Digite uma placa valida')
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Você foi desconectado')
        setTimeout(() => {
          history.push('/')
        }, 2000)
      } else {
        toast.error('Tivemos um erro, por favor tente mais tarde')
      }
    }
  }

  const handleDeleteButton = async (id) => {
    try {
      await FrotaService.removeVelhice(id)
      const newVelhices = velhices.filter((velhice) => velhice.id !== id)
      setVelhices(newVelhices)
      toast.success('Veiculo removido com sucesso')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Você foi desconectado')
        setTimeout(() => {
          history.push('/')
        }, 2000)
      } else {
        toast.error('Tivemos um erro, por favor tente mais tarde')
      }
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
            margin='0em'
            validations={[
              Validators.minimalLength(PLATE_LENGTH),
              Validators.maximalLength(PLATE_LENGTH),
            ]}
          />
          <S.SubmitButton onClick={handleSubmitButton}>
            <S.AddIcon />
          </S.SubmitButton>
        </S.InputWrapper>
      </S.HeaderWrapper>
      <S.HeaderWrapper height='80%'>
        <S.SubTitle>Veículos</S.SubTitle>
        <S.ListWrapper>
          {velhices.map((velhice, index) => (
            <S.ListItem key={velhice.id} backgroundOdd={index % 2 === 0}>
              <S.ItemLabel>{velhice.plate}</S.ItemLabel>
              <S.RemoveButton
                onClick={() => {
                  window.confirm(
                    'Você tem certeza de que deseja excluir esse veiculo?'
                  ) && handleDeleteButton(velhice.id)
                }}
              >
                <S.CloseIcon />
              </S.RemoveButton>
            </S.ListItem>
          ))}
        </S.ListWrapper>
      </S.HeaderWrapper>
      <ToastWrapper />
    </PageWrapper>
  )
}

export default FrotaPage
