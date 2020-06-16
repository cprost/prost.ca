import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Burger from './BurgerMenu'

import { theme, media } from '../styles'

const StyledLink = styled(Link)`
  color: ${theme.colours.offWhite};
  text-decoration: none;

  &.active-nav {
    color: ${theme.colours.offWhite};
    font-weight: 700;
  }
`

const BurgerLink = styled(Link)`
  color: ${theme.colours.midBlueDark};
  text-decoration: none;

  &.active-nav {
    color: ${theme.colours.darkBlue};
  }
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
  background: ${theme.colours.midBlue};
  transition: all 0.4s ease-in-out;
  transform: ${props => props.scrollPos === 'down' ? 'translateY(-80px)' : 'translateY(0px)'};
  z-index: 10;

  h2 {
    white-space: nowrap;
  }
`

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-left: 0;

  ${media.small} {
    display: none;
  }
`

const NavItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  margin-left: 2rem;

  ${media.medium} {
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
  background-color: ${theme.colours.offWhite};
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
    letter-spacing: 0.4rem;
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
      style: {
        // opacity: 0,
        // transition: 'all 100ms ease',
      }
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  componentDidMount() {
    this._mounted = true
    this.setState({
      style: {
        // transition: 'all 100ms ease',
        // transitionDelay: '100ms',
        // opacity: 1,
      }
    })
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
    const { scrollAmount, active } = this.state
    const yOffset = window.scrollY
    const scrollThresh = 10  // minimum scroll pixels to update scroll state

    if (Math.abs(scrollAmount - yOffset) <= scrollThresh || active) {
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
      <Nav scrollPos={scrollPos} >
        <h2><StyledLink to='/'>{"<Chris />"}</StyledLink></h2>

        <NavList>
          <NavItem>
            <StyledLink to="/blog" activeClassName={'active-nav'} partiallyActive={true}>Blog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/contact' activeClassName={'active-nav'}>Contact</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/resume' activeClassName={'active-nav'}>Resume</StyledLink>
          </NavItem>
        </NavList>

        <Burger
          active={active}
          toggleActive={toggleActive}
          className={`${active ? 'active' : ''}`}/>

        <BurgerMenu className={`${active ? 'active' : ''}`} >
          <h2>
            <BurgerLink to="/blog" activeClassName={'active-nav'} partiallyActive={true}>Blog</BurgerLink>
          </h2>
          <h2>
            <BurgerLink to='/contact' activeClassName={'active-nav'}>Contact</BurgerLink>
          </h2>
          <h2>
            <BurgerLink to='/resume' activeClassName={'active-nav'}>Resume</BurgerLink>
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