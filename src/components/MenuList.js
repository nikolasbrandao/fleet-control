import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const MenuListWrapper = styled.ul`
  position: absolute;
  top: 6vh;
  height: auto;
  width: 100%;
  background: #000;
  @media (min-width: 425px) {
    width: 20vw;
  }
`

const MenuItem = styled.li`
  border-bottom: 1px solid #fff;
  color: #fff;
  font-size: 1.5em;
  text-align: center;
  padding: 0.5em 0;
`

const MenuList = () => {
  let history = useHistory()

  const logout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <MenuListWrapper>
      <MenuItem
        onClick={() =>
          window.confirm('Você tem certeza de que deseja sair ?') && logout()
        }
      >
        Sair do aplicativo
      </MenuItem>
    </MenuListWrapper>
  )
}

export default MenuList
