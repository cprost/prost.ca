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
      // needs two selectors in media.js
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
    midBlue: "#4596b9",
    midBlueDark: "#3d88a8",
    lightBlue: "#99bbcc",
    lighterBlue: "#a2cadc",
    lightestBlue: "#cff8ff",
    darkestBlue: "#0a2766",
    darkBlue: "#124d7f",
    light: "#faffff",
    dark: "#2d353d",
    grey: "#6a737d",
    offWhite: "#f0f0f0",
  },

  scrollReveal: (sequence = 1) => {
    return {
      delay: (sequence * 200) + 300,
      origin: 'bottom',
      distance: '1.5rem',
      duration: '400',
      easing: 'ease-in-out'
    }
  }
}

export default theme