// WIP / TBD : responsive design
// width < 600 - use hamburger menu
// width < 900-1024 - smaller tile sizes, full menu
// width unrestricted - full tile sizes, full menu, etc

const theme = {
  maxWidthIndex: '1200px',  // for index page
  maxWidthOther: '1024px',  // for other pages

  screenSizes: {
    small: {
      selector: 'max-width',
      value: '600px'
    },
    medium: {
      // needs two selectors in media.js #9F513C
      value: ['600px', '1023px']
    },
    large: {
      selector: 'min-width',
      value: '1024px'
    }
  },

  fonts: {
    Roboto: 'Roboto, sans-serif',
    OpenSans: 'Open Sans, sans-serif'
  },

  colours: {
    palette100: "#f2f4f8",
    palette200: "#cad5e2",
    palette300: "#a2b5cd",
    palette400: "#7a96b8",
    palette500: "#56779f",
    palette600: "#405977",
    palette700: "#2b3b50",
    palette800: "#151e28",
    hilite200: "#f78464",
    hilite400: "#b84425",
  },

  shadows: {
    light: '0 5px 8px #a2b5cd',
    dark: '0 5px 8px #405977',
    darker: '0 8px 8px #2b3b50',
    navEdge: '0 0 5px 0 rgba(0, 0, 0, 0.8)',
  },

  scrollReveal: (sequence = 1) => {
    return {
      delay: (sequence * 200) + 300,
      origin: 'bottom',
      distance: '1.5rem',
      duration: '400',
      easing: 'ease-in-out',
      opacity: 0
    }
  }
}

export default theme