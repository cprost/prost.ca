import styled from '@emotion/styled'
import theme from './theme'
import media from './media'

const IndexContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidthIndex};
`

const Container = styled.div`
  padding: 2rem 2rem 4rem 2rem;
  margin: 2rem auto;
  max-width: ${theme.maxWidthOther};
  background-color: ${theme.colours.light};
  color: ${theme.colours.dark};
  border: 2px solid ${theme.colours.offWhite};
  border-radius: 0.5rem;
  
  ${media.small} {
    padding: 0 0 1rem 0;
    border: none;
  }

  ${media.medium} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export { IndexContainer, Container }