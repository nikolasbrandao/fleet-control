import styled from 'styled-components'

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
  height: 90vh;
  margin-top: 5vh;
  border-radius: 2%;
  background-color: rgba(246, 247, 249);
  justify-content: center;

  @media (min-width: 768px) {
    width: 45vw;
  }
`

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

export const Input = styled.input`
  width: 100%;
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
  margin-bottom: 1em;
`

export const Button = styled.button`
  outline: none;
  background: #303960;
  width: 80%;
  border: 0;
  border-radius: 4px;
  padding: 12px 20px;
  color: #e5e5e5;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`
