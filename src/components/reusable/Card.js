import React from 'react'
import styled from '@emotion/styled'

import Astro from '../../images/gatsby-icon.png'

const CardWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  transition: 0.5s;
  &:hover {
      box-shadow: 0 0 18px 0 rgba(0, 0, 128, 0.3);
  }
`

const CardTitle = styled.div`
  padding: .7rem;
  background-color: #eee;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px dashed #ddd;

  h1 {
    margin: 0.5rem 0;
  }
`

const CardImage = styled.img`
  width: 90%;
  display: block;
  margin: 0.5rem auto;
  text-align: center;
`

const CardDesc = styled.div`
  padding: 0 1rem;
`

const Card = (props) => {
  return (
    <CardWrapper>
      <CardTitle>
        <h1>Subject Title</h1>
      </CardTitle>
      <CardImage src={Astro} alt="placeholder for image" />
      <CardDesc>
        <p>Talk about the card's subject</p>
        <h3>Learn more</h3>
      </CardDesc>
    </CardWrapper>
  )
}

export default Card