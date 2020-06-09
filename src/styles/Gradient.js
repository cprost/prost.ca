import styled from '@emotion/styled'
import theme from './theme'

const Gradient = styled.div`
  width: 100%;
  height: 150px;
  ${'' /* background: linear-gradient(${theme.colours.midBlue} 0%, ${theme.colours.lightBlue} 50%, ${theme.colours.light} 80%); */}
  background: linear-gradient(${theme.colours.midBlue} 0%, rgba(255, 255, 255, 0) 100%);
`

export default Gradient