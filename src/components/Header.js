import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu } from '@styled-icons/evaicons-solid/Menu'
import { DotsVertical } from '@styled-icons/heroicons-outline/DotsVertical'
import { useLocation } from 'react-router-dom'

const NavWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6vh;
  padding: 0.5em;
  align-items: center;
  background: #000;
  width: 100vw;
`

const NavTitle = styled.span`
  font-size: 1.2em;
  color: #fff;
  text-transform: uppercase;
`

const Header = () => {
  let location = useLocation()
  let [title, setTitle] = useState()
  useEffect(() => {
    const arrLocation = location.pathname.split('/')
    setTitle(arrLocation[1])
  }, [location])

  return (
    <NavWrapper>
      <Menu color='#FFF' width='2em' />
      <NavTitle>{title}</NavTitle>
      <DotsVertical color='#FFF' width='2em' />
    </NavWrapper>
  )
}

export default Header
