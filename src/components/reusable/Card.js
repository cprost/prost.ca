import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { theme } from '../../styles'

const CardWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.4), 10px 10px 5px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease-in-out;
  background-color: white;

  .gatsby-image-wrapper {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0 0 8px ${theme.colours.midBlue}, 10px 10px 5px 0 rgba(0, 0, 0, 0.15);
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

  h4 {
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

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`

const CardSkills = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    color: ${theme.colours.grey};
    font-family: monospace;
    font-size: 16px;
    margin-left: 1rem;
  }
`

const CardLink = styled.a`
  padding: 0.75rem;
  margin-right: 1rem;
  margin-left: 1rem;
  white-space: nowrap;
  color: ${theme.colours.midBlueDark};
  background-color: ${theme.colours.light};
  border: 2px solid ${theme.colours.midBlue};
  border-radius: 0.5rem;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
  font-weight: 700;
`

const Card = React.forwardRef(({ title, description, skills, img }, ref) => (
  <CardWrapper ref={ref}>
    <CardTitle>
      <h4>{title}</h4>
    </CardTitle>
    <ImgWrapper>
      <Img 
        fluid={img}
        alt={title}
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
      <p>{description}</p>
    </CardDesc>
    <SkillsWrapper>
      <CardSkills>
        {skills.map((skill, index) => {
          return <li>{skill}</li>
        })}
      </CardSkills>
      <CardLink>
        More →
      </CardLink>
    </SkillsWrapper>
  </CardWrapper>
))

export default Card