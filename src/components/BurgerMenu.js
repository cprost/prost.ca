import React, { Component } from 'react'
import styled from '@emotion/styled'

import { theme } from '../styles'

// followed this as a guideline for the burger menu:
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

export const BurgerButton = styled.button`
  right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media screen and (min-width: ${theme.screenSizes.small.value}) {
    display: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 5px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    &.active {
      background: darkgrey;
    }

    &.active:nth-child(1) {
      transform: rotate(45deg);
    }

    &.active:nth-child(2) {
      opacity: 0;
      transform: translateX(-0.2rem);
    }

    &.active:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`;

class Burger extends Component {
  render() {
    const { active, counter, toggleActive } = this.props

    return (
      <BurgerButton
        className={`${active ? 'active' : ''}`}
        onClick={() => {
          toggleActive(active, counter)
        }}

      >
        <div className={`${active ? 'active' : ''}`}></div>
        <div className={`${active ? 'active' : ''}`}></div>
        <div className={`${active ? 'active' : ''}`}></div>
      </BurgerButton>
    )
  }
}

export default Burger