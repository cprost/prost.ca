import React from 'react'
import styled from '@emotion/styled'
import theme from './theme'

const ShadowUpper = styled.div`
  filter: drop-shadow(0px -8px 4px rgba(0,0,0,0.2));
`

const ShadowLower = styled.div`
  filter: drop-shadow(0px 10px 5px rgba(0,0,0,0.2));
`

const ShapeUpper = styled.div`
  clip-path: polygon(0 80%, 100% 0, 100% 100%, 0% 100%);
  ${'' /* clip-path: polygon(0 0, 100% 0, 100% 20%, 0 100%); */}
  background: ${theme.colours.light};
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const ShapeLower = styled(ShapeUpper)`
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 100%);
`

const EdgeTop = () => {
  return (
    <ShadowUpper>
      <ShapeUpper />
    </ShadowUpper>
  )
}

const EdgeBottom = () => {
  return (
    <ShadowLower>
      <ShapeLower />
    </ShadowLower>
  )
}

export { EdgeTop, EdgeBottom }