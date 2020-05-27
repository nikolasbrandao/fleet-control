import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 35px;
  outline: none;
  display: block;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
  color: #303960;
  font-weight: 500;
  transition: 0.3s ease;
  font-size: 1em;
`

const LabelValidation = styled.span`
  width: ${(props) => (props.width ? props.width : '100%')};
  color: #9a1f40;
  font-size: 0.8em;
  margin: 0.2em;
`
const InputWrapper = styled.div`
  margin: 0.9em 0;
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
    <InputWrapper>
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
