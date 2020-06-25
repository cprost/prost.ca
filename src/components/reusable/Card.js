import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { theme } from '../../styles'

const CardWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;
  background-color: ${theme.colours.light};

  .gatsby-image-wrapper {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 8px ${theme.colours.midBlue};
    transition: all 0.1s ease-in-out;

    .gatsby-image-wrapper {
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 0 4px ${theme.colours.midBlue};
    }
  }
`

const CardTitle = styled.div`
  padding: 0.7rem;

  border-radius: 8px 8px 0 0;
  border-bottom: 1px dashed #ddd;

  h3 {
    margin: 0.5rem 0;
    font-weight: 600;
    color: ${theme.colours.midBlueDark};
  }
`

const ImgWrapper = styled.div`
  .gatsby-image-wrapper {
    max-height: 215px;
  }
`

const CardDesc = styled.div`
  padding: 0 1rem;
`

const CardLink = styled.a`
  p {
    padding-bottom: 1rem;
    padding-right: 1rem;
  }

  p:after {
    content: ' →';
  }
`

const Card = React.forwardRef(({ title, img }, ref) => (
  <CardWrapper ref={ref}>
    <CardTitle>
      <h3>{title}</h3>
    </CardTitle>
    <ImgWrapper>
      <Img 
        fluid={img}
        // imgStyle={
        //   { objectFit: 'contain', maxHeight: '200px' } 
        //   /*
        //     counteracts gatsby img from filling then getting cropped by parent 
        //     FUTURE : adjust for 16:9 aspect ratio images?
        //   */ 
        // }
      /> 
    </ImgWrapper>
    <CardDesc>
      <p>Talk about the card's subject</p>
    </CardDesc>
    <CardLink>
      <p style={{textAlign: 'right'}}>Learn more</p>
    </CardLink>
  </CardWrapper>
))

export default Card