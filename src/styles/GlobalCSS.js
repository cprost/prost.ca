// put as few tweaks as required in here
// most other sitewide styling tweaks belong in theme.js

import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }

        *, {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          position: relative;
        }
      `}
    />
  )
}

export default GlobalCSS