import styled from 'styled-components'
import { CarGarage } from '@styled-icons/boxicons-solid/CarGarage'

export const Title = styled.h2`
  width: 100%;
  text-align: ${(props) => (props.align ? props.align : 'left')};
  font-size: 1.5em;
  margin-bottom: 1em;
`

export const InputWrapper = styled.section`
  margin: 3em 0;
  width: 80%;
`

export const Button = styled.button`
  outline: none;
  background: ${({ theme }) => theme.primaryBlue};
  width: 80%;
  border: 0;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: ${({ theme }) => theme.primaryLight};
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`
export const CarIcon = styled(CarGarage)`
  color: ${({ theme }) => theme.primaryBlue};
  width: 8em;
`
