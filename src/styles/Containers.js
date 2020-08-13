import styled from '@emotion/styled'
import theme from './theme'
import media from './media'

const IndexContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidthIndex};
  z-index: 2;
`

const Container = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  margin: 2rem auto;
  max-width: ${theme.maxWidthOther};
  background: ${props => props.transparent ? 'none' : theme.colours.palette100};
  color: ${props => props.transparent ? theme.colours.palette100 : theme.colours.palette700};
  border: ${props => props.transparent ? 'none' : theme.colours.palette700};
  box-shadow: ${props => props.transparent ? 'none' : `0 5px 8px ${theme.colours.palette700}`};
  border-radius: 0.5rem;
  
  ${media.small} {
    padding: 0.5rem;
    border: none;
  }

  ${media.medium} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export { IndexContainer, Container }