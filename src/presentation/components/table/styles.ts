import { styled } from '~/stitches.config'

export const TableModel = styled('table', {
  width: '100%',

  borderCollapse: 'collapse',

  thead: {
    tr: {
      background: '$green8',

      th: {
        fontWeight: 600,
        padding: '0.8rem 0',

        color: '$white9',

        '&:first-child': { borderRadius: '0.5rem 0 0 0' },
        '&:last-child': { borderRadius: '0 0.5rem 0 0' }
      }
    }
  },

  tbody: {
    tr: {
      '&.hover-effect': {
        cursor: 'pointer',
        transition: '.3s ease',

        '&:hover': { background: '$gray7' }
      },
      '&:nth-child(even)': { background: '$gray6' },

      td: {
        textAlign: 'center',
        padding: '0.5rem 0',

        '&:first-child': { borderRadius: '0 0 0 0.5rem' },
        '&:last-child': { borderRadius: '0 0 0.5rem 0' }
      }
    }
  }
})