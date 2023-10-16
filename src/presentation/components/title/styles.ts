import { styled } from '~/stitches.config'

export const Container = styled('h2', {
  fontSize: 20,

  variants: {
    variant: {
      color: {
        white: {
          color: '$white9'
        },
        default: {
          color: '$black8'
        }
      }
    },
    color: {
      white: {
        color: '$white9'
      },
      default: {
        color: '$black8'
      },
      primary: {
        color: '$green9'
      },
      error: {
        color: '$red9'
      }
    },
    size: {
      small: {
        fontSize: 12
      },
      normal: {
        fontSize: 16
      },
      big: {
        fontSize: 22
      }
    },
    margin: {
      top: {
        marginTop: '0.2rem'
      }
    }
  },
  defaultVariants: {
    color: 'default'
  }
})
