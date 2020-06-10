// These are global default settings for CSS
// The default screen size is assumed to be large/desktop
// Use the media selectors from media.js only for small/medium screen CSS

import React from 'react'
import { Global, css } from '@emotion/core'

import { theme, media } from '../styles'

const GlobalCSS = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,600&display=swap');

        html {
          box-sizing: border-box;
          font-family: ${theme.fonts.OpenSans};
          ${'' /* scrollbar-width: none; */}
        }

        html::-webkit-scrollbar {
          display: none;
        }

        *, {
          box-sizing: inherit;
        }

        body {
          margin: 0;
          position: relative;
          background-color: ${theme.colours.light};
        }

        h1 {
          font-size: 70px;
          font-weight: 400;
          margin-top: 2rem;
          margin-bottom: 2rem;

          ${media.medium} {
            font-size: 55px;
          }

          ${media.small} {
            font-size: 40px;
          }
        }

        h2 {
          font-size: 40px;
          font-weight: 400;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;

          ${media.medium} {
            font-size: 30px;
          }

          ${media.small} {
            font-size: 25px;
          }
        }

        h3 {
          font-size: 30px;
          font-weight: 400;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;

          ${media.medium} {
            font-size: 28px;
          }

          ${media.small} {
            font-size: 24px;
          }
        }

        h4 {
          font-size: 24px;
          font-weight: 400;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;

          ${media.medium} {
            font-size: 20px;
          }

          ${media.small} {
            font-size: 18px;
          }
        }

        p {
          font-size: 16px;

          ${media.medium} {
            font-size: 14px;
          }

          ${media.small} {
            font-size: 14px;
          }
        }

        .fadein-enter {
          transform: translateY(2rem);
          transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
          opacity: 0.01;
        }

        .fadein-enter-active {
          transform: translateY(0);
          transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
          opacity: 1;
        }

      `}
    />
  )
}

export default GlobalCSS