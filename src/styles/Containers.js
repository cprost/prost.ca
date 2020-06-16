import styled from '@emotion/styled'
import theme from './theme'

const IndexContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.maxWidthIndex};
`

const Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 4rem;
  margin: 2rem auto;
  max-width: ${theme.maxWidthOther};
`

export { IndexContainer, Container }