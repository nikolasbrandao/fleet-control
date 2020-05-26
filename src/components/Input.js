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
  margin: 0.5em 0;
  font-size: 1em;
`
export default Input
