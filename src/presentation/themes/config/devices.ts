export const breakpoints = {
  mobile: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',

  tablet: '768px',

  laptop: '1024px',
  laptopMedium: '1280px',
  laptopLarge: '1440px',

  desktop: '1920px',
  desktopLarge: '2560px'
}

export const devices = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  mobileMedium: `(max-width: ${breakpoints.mobileMedium})`,
  mobileLarge: `(max-width: ${breakpoints.mobileLarge})`,

  table: `(max-width: ${breakpoints.tablet})`,

  laptop: `(max-width: ${breakpoints.laptop})`,
  laptopMedium: `(max-width: ${breakpoints.laptopMedium})`,
  laptopLarge: `(max-width: ${breakpoints.laptopLarge})`,

  desktop: `(max-width: ${breakpoints.desktop})`,
  desktopLarge: `(max-width: ${breakpoints.desktopLarge})`
}