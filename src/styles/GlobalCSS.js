// put as few tweaks as required in here
// most other sitewide styling tweaks belong in theme.js

import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');


        html {
          box-sizing: border-box;
          font-family: 'Roboto', 'Montserrat', sans-serif;
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