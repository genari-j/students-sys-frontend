import { styled } from '~/stitches.config'

export const ButtonModel = styled('button', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: '.3s',

  padding: '0.7rem 0',
  borderRadius: '0.5rem',

  background: '$green8',

  '&:hover': { background: '$green9' },

  variants: {
    variant: {
      bgGreen9: { background: '$green9', },
      bgGreen7: { green7: '$green7' }
    },
    color: {
      white9: { color: '$white9' },
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
    }
  }
})
