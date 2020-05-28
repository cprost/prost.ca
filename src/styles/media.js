import theme from './theme'


const media = Object.keys(theme.screenSizes).reduce((all, label) => {
  if (theme.screenSizes[label].value.length === 2) {
    // medium-sized screens

    all[label] = `@media only screen and (
      (min-width: ${theme.screenSizes[label].value[0]}) and (
      max-width: ${theme.screenSizes[label].value[1]})
    )`

  } else {
    // small or large screens

    all[label] = `@media only screen and (
      ${theme.screenSizes[label].selector}
      : ${theme.screenSizes[label].value}
    )`

  }

  return all
}, {})

export default media
