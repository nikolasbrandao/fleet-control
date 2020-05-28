import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 2.2em;
  outline: none;
  display: block;
  background: ${({ theme }) => theme.secondaryDark};
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: ${({ theme }) => theme.primaryBlue};
  font-weight: 500;
  transition: 0.3s ease;
  font-size: 1em;
`

const LabelValidation = styled.span`
  width: ${(props) => (props.width ? props.width : '100%')};
  color: ${({ theme }) => theme.primaryRed};
  font-size: 0.8em;
  margin: 0.2em;
`
const InputWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${({ margin }) => (margin ? margin : '0.9em 0')};
`

const FormInput = (props) => {
  const [validations, setValidations] = useState([])

  const validateOnChange = (e) => {
    const checkValidations = props.validations
      .map((validator) => validator(e.target.value))
      .filter((validation) => !validation.isValid)
    setValidations(checkValidations || [])
    props.onChange(e)
  }

  return (
    <InputWrapper margin={props.margin} width={props.width}>
      <Input {...props} onChange={(e) => validateOnChange(e)} />
      {validations.map((validation) => (
        <LabelValidation key={validation.message} width={props.width}>
          {validation.message}
        </LabelValidation>
      ))}
    </InputWrapper>
  )
}

FormInput.defaultProps = { validations: [], width: '100%' }

export default FormInput
