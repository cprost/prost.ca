// WIP / TBD : responsive design
// width < 600 - use hamburger menu
// width < 900-1024 - smaller tile sizes, full menu
// width unrestricted - full tile sizes, full menu, etc

const theme = {
  maxWidth: '1200px',  // for containers

  screenSizes: {
    small: {
      selector: 'max-width',
      value: '600px'
    },
    medium: {
      value: '800px',
    },
    large: {
      selector: 'min-width',
      value: '1024px'
    }
  }
}

export default theme