import { styled } from '~/stitches.config'

export const Container = styled('h2', {
  fontSize: 20,

  variants: {
    color: {
      white9: { color: '$white9' },
      black8: { color: '$black8' },
      green9: { color: '$green9' },
      red9: { color: '$red9' }
    },
    size: {
      sm: { fontSize: 12 },
      nl: { fontSize: 16 },
      lg: { fontSize: 18 },
      xl: { fontSize: 20 },
      xl2: { fontSize: 22 }
    },
    weight: {
      500: { fontWeight: 500 },
      600: { fontWeight: 600 },
      700: { fontWeight: 700 },
      800: { fontWeight: 800 },
      900: { fontWeight: 900 }
    },
    margin: {
      top: { marginTop: '0.2rem' }
    }
  },
  defaultVariants: { color: 'black8' }
})
