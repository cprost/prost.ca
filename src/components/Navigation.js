import React from 'react'
import styled from '@emotion/styled'

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  background: grey;
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`

const NavItem = styled.li`
  margin-left: 3rem;
`

const Navigation = () => {
  return (
    <Nav>
      <h1>Chris Prost</h1>
      <NavList>
        <NavItem>Experience</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Resume</NavItem>
      </NavList>
    </Nav>
  )
}

export default Navigation