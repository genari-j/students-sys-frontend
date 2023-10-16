import { styled } from '~/stitches.config'

export const Container = styled('table', {
  width: '100%',

  fontSize: 14,
  // borderRadius: '0.3rem',
  borderCollapse: 'collapse',

  thead: {
    textAlign: 'left',
    background: '$green8',

    tr: {
      width: '100%',

      th: {
        padding: '1rem 0.5rem',
        color: '$white9'
      }
    }
  },

  tbody: {
    tr: {
      cursor: 'pointer',
      transition: '.3s',

      '&:nth-child(odd)': { background: '$blue4' },
      '&:hover': { background: '$blue3' },

      td: {
        padding: '0.5rem',

        '&:first-child': { borderRadius: '0.3rem 0 0 0.3rem' },
        '&:last-child': { borderRadius: '0 0.3rem 0.3rem 0' }
      }
    }
  }
})
