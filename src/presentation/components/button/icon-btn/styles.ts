import { styled } from '~/stitches.config'

export const ButtonModel = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: '.3s',

  background: '$gray6',

  '&:hover': { background: '$gray7' },

  variants: {
    variant: {
      bgGray9: { background: '$gray9', },
      bgGray8: { background: '$gray8' },
      bgGreen9: { background: '$green9' },
      bgGreen8: { background: '$green8' },
      bgGreen7: { background: '$green7' }
    },
    height: {
      sm: { height: '2.5rem' },
      nl: { height: '4.5rem' },
      lg: { height: '6.5rem' }
    },
    width: {
      sm: { width: '2.5rem' },
      nl: { width: '4.5rem' },
      lg: { width: '6.5rem' }
    },
    radius: {
      sm: { borderRadius: '0.5rem' },
      nl: { borderRadius: '1rem' },
      lg: { borderRadius: '6rem' },
      xl: { borderRadius: '10rem' },
      xl2: { borderRadius: '50%' }
    },
    color: {
      white9: { color: '$white9' },
      black9: { color: '$black9' },
      red9: { color: '$red9' },
      green9: { color: '$green9' }
    },
    size: {
      sm: { fontSize: 12 },
      nl: { fontSize: 16 },
      lg: { fontSize: 18 },
      xl: { fontSize: 20 },
      xl2: { fontSize: 22 }
    }
  }
})
