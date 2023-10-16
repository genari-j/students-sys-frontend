import { styled } from '~/stitches.config'

export const Container = styled('main', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',  
  alignItems: 'center',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const Content = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  img: {
    '&:nth-child(1)': { width: 120, filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4))' },
    '&:nth-child(3)': { width: 200 }
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',

    p: {
      fontSize: '1.5rem',
      fontWeight: 600,
      fontFamily: 'Kalam'
    }
  }
})

export const ButtonBox = styled('div', {
  width: '100%',
  maxWidth: 350
})