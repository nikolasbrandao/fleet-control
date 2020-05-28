import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu, Close } from '@styled-icons/evaicons-solid'
import { DotsVertical } from '@styled-icons/heroicons-outline/DotsVertical'
import { useLocation } from 'react-router-dom'

import MenuList from './MenuList'

const NavWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
`

const MenuBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6vh;
  padding: 0.5em;
  align-items: center;
  width: 100vw;
  background: #000;
`

const NavTitle = styled.span`
  font-size: 1.2em;
  color: #fff;
  text-transform: uppercase;
`

const Header = () => {
  let location = useLocation()
  let [title, setTitle] = useState()
  let [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    const arrLocation = location.pathname.split('/')
    setTitle(arrLocation[1])
  }, [location])

  return (
    <NavWrapper>
      <MenuBar>
        {showMenu ? (
          <Close color='#FFF' width='2em' onClick={() => setShowMenu(false)} />
        ) : (
          <Menu color='#FFF' width='2em' onClick={() => setShowMenu(true)} />
        )}
        <NavTitle>{title}</NavTitle>
        <DotsVertical color='#FFF' width='2em' />
      </MenuBar>
      {showMenu && <MenuList />}
    </NavWrapper>
  )
}

export default Header
