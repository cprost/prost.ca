import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Burger from './BurgerMenu'

import { theme } from '../styles'

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding-left: 2rem;
  padding-right: 2rem;
  box-shadow: ${props => props.scrollPos === 'up' ? '0 0 5px rgba(0, 0, 0, 0.8)' : 'none'};
  background: grey;
  transition: all 0.4s ease-in-out;
  transform: ${props => props.scrollPos === 'down' ? 'translateY(-80px)' : 'translateY(0px)'};

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
  }
`

class Navigation extends Component {
  constructor(props) {
    super(props)

    this._mounted = false

    this.state = {
      active: false,
      scrollAmount: 0,
      scrollPos: 'none',
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  componentDidMount() {
    this._mounted = true
    window.addEventListener('scroll', () => this.onScroll());
  }

  componentWillUnmount() {
    this._mounted = false;
 }

  toggleActive(active, counter) {
    // check if mounted before modifying state

    this._mounted && this.setState({
      active: !active
      })
  }

  onScroll() {
    const { scrollAmount } = this.state
    const yOffset = window.scrollY
    const scrollThresh = 50  // minimum scroll pixels to update scroll state

    if (Math.abs(scrollAmount - yOffset) <= scrollThresh) {
      return  // to prevent menu movement for scrolling less than threshold pixels
    } else if (yOffset < scrollThresh * 2) {
      this.setState({ scrollPos: 'top' })
    } else if (yOffset > scrollAmount) {
      this.setState({ scrollPos: 'down' })
    } else {
      this.setState({ scrollPos: 'up' })
    }

    this.setState({ scrollAmount: yOffset })  // update regardless of state
  }

  render() {
    const { active, scrollPos } = this.state
    const toggleActive = this.toggleActive

    return (
      <Nav scrollPos={scrollPos}>
        <h1><StyledLink to='/'>{"<Chris />"}</StyledLink></h1>
        <NavList>
          <NavItem>
            <StyledLink to="/experience">Experience</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/contact'>Contact</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/resume'>Resume</StyledLink>
          </NavItem>
        </NavList>
        <Burger
              active={active}
              toggleActive={toggleActive}
            className={`${active ? 'active' : ''}`}/>
        <BurgerMenu className={`${active ? 'active' : ''}`} >
          <h2>
            <StyledLink to="/experience">Experience</StyledLink>
          </h2>
          <h2>
            <StyledLink to="/blog">Blog</StyledLink>
          </h2>
          <h2>
            <StyledLink to='/contact'>Contact</StyledLink>
          </h2>
          <h2>
            <StyledLink to='/resume'>Resume</StyledLink>
          </h2>
        </BurgerMenu>
        <MobileBlur
          onClick={() => this.setState({active: false})}
          className={`${active ? 'active' : ''}`}/>
      </Nav>
    )
  }
}

export default Navigation