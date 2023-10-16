import { globalCss } from '~/stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    outline: 'none',
    border: 'none',
    listStyle: 'none',

    fontFamily: 'Poppins'
  },

  a: {
    textDecoration: 'none',
    cursor: 'pointer',

    color: '$black9'
  },

  button: {
    cursor: 'pointer'
  },

  html: {
    scrollBehavior: 'smooth',
    background: '$white9',

    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialised',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%',

    '@laptop': {
      fontSize: '93.75%'
    },

    '@tablet': {
      fontSize: '87.5%'
    }
  },

  '&::-webkit-scrollbar': {
    width: 6,
    background: '$gray7'
  },
  '&::-webkit-scrollbar-track': {
    width: 10
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 24,
    background: '$black9'
  },
})