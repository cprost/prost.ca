import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

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

const ImgWrapper = styled.div`
  max-height: 200px;
`

const CardDesc = styled.div`
  padding: 0 1rem;
`

const Card = React.forwardRef(({ title, img }, ref) => (
  <CardWrapper ref={ref}>
    <CardTitle>
      <h3>{title}</h3>
    </CardTitle>

    
    <ImgWrapper>
      <Img 
        fluid={img}
        imgStyle={
          { objectFit: 'contain', maxHeight: '200px' } 
          /*
            counteracts gatsby img from filling then getting cropped by parent 
            FUTURE : adjust for 16:9 aspect ratio images?
          */ 
        } /> 
    </ImgWrapper>
    <CardDesc>
      <p>Talk about the card's subject</p>
      <h3>Learn more</h3>
    </CardDesc>
  </CardWrapper>
))

export default Card