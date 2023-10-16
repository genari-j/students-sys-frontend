import { styled } from '~/stitches.config'

export const Container = styled('img', {
  display: 'flex',

  width: '100%',

  variants: {
    variant: {
    },
    size: {
      superSmall: {
        width: 120
      },
      small: {
        width: 180
      },
      normal: {
        width: 250
      },
      big: {
        width: 350
      }
    }
  }
})
