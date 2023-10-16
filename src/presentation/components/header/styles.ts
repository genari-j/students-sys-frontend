import { styled } from '~/stitches.config'

export const Container = styled('header', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '2rem 0'
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: 1000,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40rem'
})

export const PrimaryUnorderedList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  li: { fontWeight: 500 }
})

export const GearIcon = styled('li', {
  position: 'relative',

  '&:hover ul': { display: 'flex' },

  i: {
    display: 'flex',

    transition: '.3s',
    cursor: 'pointer',

    fontSize: '1.5rem',

    '&:hover': { color: '$green8' }
  },

  ul: {
    minWidth: '180px',

    display: 'none',
    flexDirection: 'column',
    gap: '0.5rem',

    zIndex: 1,
    position: 'absolute',
    top: '-0.8rem',
    left: '100%',

    padding: '0.5rem',

    li: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',

      transition: '.3s',

      padding: '0.3rem 0.5rem',
      borderRadius: '0.2rem',

      i: {
        display: 'flex',

        transition: '.3s',
        cursor: 'pointer',

        fontSize: '1.5rem'
      },

      a: {
        width: '100%',
        transition: '.3s'
      },

      button: {
        width: '100%',

        textAlign: 'left',
        fontSize: '1rem',
        fontWeight: 500,

        background: 'none'
      },

      '&:hover': {
        background: '$gray6',

        i: { color: '$green8' },
        a: { color: '$green8' },
        button: { color: '$green8' }
      }
    }
  }
})
