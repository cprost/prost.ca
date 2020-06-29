import React from 'react'
import styled from '@emotion/styled'
import theme from './theme'

const ShadowUpper = styled.div`
  filter: drop-shadow(0px -8px 4px rgba(0,0,0,0.15));
`

const ShadowLower = styled.div`
  filter: drop-shadow(0px 6px 4px rgba(0,0,0,0.15));
`

const ShapeUpper = styled.div`
  clip-path: polygon(0 80%, 100% 0, 100% 100%, 0% 100%);
  background: ${theme.colours.light};
  padding-top: 2rem;
  padding-bottom: 2rem;

  &.alt-edge {
    background: ${theme.colours.offWhite};
  }
`

const ShapeLower = styled(ShapeUpper)`
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 100%);
`

const EdgeTop = ({ className }) => {
  return (
    <ShadowUpper>
      <ShapeUpper className={className} />
    </ShadowUpper>
  )
}

const EdgeBottom = ({ className }) => {
  return (
    <ShadowLower>
      <ShapeLower className={className} />
    </ShadowLower>
  )
}

export { EdgeTop, EdgeBottom }