import { styled } from '~/stitches.config'

export const ButtonModel = styled('button', {
  width: '100%',
  height: 50,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,

  fontSize: 18,
  borderRadius: 6,

  transition: '.3s',

  variants: {
    variant: {
      general: {
        '&:hover': { background: '$green9' }
      },
      cancel: {
        background: '$black8',
        '&:hover': { background: '$black7' }
      },
      logout: {
        '&:hover': { color: '$black8' }
      },
      sortButton: {
        gap: 0
      },
      arrowPagination: {
        width: 30,
        height: 30,

        '&:hover': { background: '$black7' }
      }
    },
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    background: {
      primary: {
        background: '$green8'
      },
      none: {
        background: 'none'
      }
    },
    weight: {
      true: {
        fontWeight: 600
      }
    },
    color: {
      default: { color: '$green8' },
      white: { color: '$white9' }
    }
  },
  defaultVariants: {
    background: 'primary',
    color: 'default'
  }
})
