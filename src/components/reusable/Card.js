import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { theme } from '../../styles'

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: ${theme.shadows.light};
  font-family: ${theme.fonts.Roboto};
  transition: all 0.4s ease-in-out;

  .gatsby-image-wrapper {
    border-radius: 4px 4px 0 0;
  }

  &:hover {
    box-shadow: ${theme.shadows.dark};
    transition: all 0.4s ease-in-out;
  }
`

const CardTitle = styled.h4`
  margin: 0.5rem 0;
  font-weight: 500;
  color: ${theme.colours.palette700};
`

const ImgWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 215px;
  }
`

const CardDesc = styled.div`
  padding: 1rem;
  transition: all 0.4s ease-in-out;

  p {
    min-height: 60px;
    margin-top: 1rem;
    margin-bottom: 0;
    opacity: 0.7;
  }
`

const CardSkills = styled.ul`
  margin-top: 0rem;
  padding-left: 0rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    color: ${theme.colours.palette400};
    font-family: monospace;
    font-size: 14px;
    margin-right: 1rem;
  }
`

const CardLink = styled.a`
  padding: 1rem;
  display: flex;
  justify-content: right;
  font-weight: 500;
  color: ${theme.colours.hilite200};
`

const Card = React.forwardRef(({ title, description, skills, img, ext }, ref) => (
  <CardWrapper ref={ref}>
    <ImgWrapper>
      <Img 
        fluid={img}
        alt={title}
      /> 
    </ImgWrapper>
    <CardDesc className="card-desc">
      <CardTitle>
        {title}
      </CardTitle>
      <CardSkills>
        {skills.map((skill, index) => {
          return <li>{skill}</li>
        })}
      </CardSkills>
      <p>{description}</p>
    </CardDesc>
    <CardLink href={ext}>
        LEARN MORE →
      </CardLink>
  </CardWrapper>
))

export default Card