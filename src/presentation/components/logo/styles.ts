import { styled } from '~/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',

  img: {
    width: '100%',
    maxWidth: 50,

    filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))'
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    lineHeight: '1rem',

    span: {
      fontWeight: 500,
      textShadow: '2px 3px 3px #D1D1D1'
    }
  }
})
