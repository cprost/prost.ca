import React, { Component } from 'react'
import styled from '@emotion/styled'

import Burger from './BurgerMenu'

import { theme } from '../styles'

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  background: grey;

  h1 {
    white-space: nowrap;
  }
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${theme.screenSizes.small.value}) {
    display: none;
  }
`

const NavItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  margin-left: 2rem;

  @media screen and (max-width: ${theme.screenSizes.medium.value}) {
    margin-left: 1rem;
  }
`

const MobileBlur = styled.div`
  pointer-events: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.25s ease-in-out;
  opacity: 0;
  z-index: -1;

  &.active {
    pointer-events: auto;
    opacity: 0.5;
  }
`

const BurgerMenu = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 0 1rem;
  top: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
  transform: translateX(100%);

  &.active {
    transform: translateX(0%);
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);
  }

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: darkgrey;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      counter: 0,
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  toggleActive(active, counter) {
    this.setState({
      active: !active,
      counter: counter + 1
      })
  }

  render() {

    console.log(this.state.active)

    return (
      <Nav>
        <h1>{"<Chris />"}</h1>
        <NavList>
          <NavItem>Experience</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Resume</NavItem>
        </NavList>
        <Burger
              active={this.state.active}
              counter={this.state.counter}
              toggleActive={this.toggleActive}
            className={`${this.state.active ? 'active' : ''}`}/>
        <BurgerMenu className={`${this.state.active ? 'active' : ''}`} >
          <h2>
            Experience
          </h2>
          <h2>
            Blog
          </h2>
          <h2>
            Contact
          </h2>
          <h2>
            Resume
          </h2>
        </BurgerMenu>
        <MobileBlur
          onClick={() => this.setState({active: false})}
          className={`${this.state.active ? 'active' : ''}`}/>
      </Nav>
    )
  }
}

export default Navigation