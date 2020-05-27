import styled from 'styled-components'

export const HeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: ${(props) => (props.height ? props.height : '20%')};
  width: 100%;
`
export const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 1.5em;
  padding: 1em;
  font-weight: 500;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1em;
  width: 100%;
`
export const SubmitButton = styled.button`
  outline: none;
  background: #f8b24f;
  border: 0;
  border-radius: 8%;
  padding: 0.5em;
  cursor: pointer;
`
export const Divider = styled.hr`
  border-top: 1px solid #e5e5e5;
  width: 90%;
  margin: 0.2em 0;
`

export const SubTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 1.2em;
  padding: 1em;
  font-weight: 400;
`
export const ListWrapper = styled.ul`
  height: 100%;
  margin: 0.5em 0;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5em 1.2em;
  background: ${({ background }) => (background ? background : 'none')};
  border-bottom: 2px solid #fff;
`

export const ItemLabel = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  color: #303960;
  text-transform: uppercase;
`

export const RemoveButton = styled.button`
  outline: none;
  background: #9a1f40;
  border: 0;
  border-radius: 8%;
  padding: 0.5em;
  cursor: pointer;
`
