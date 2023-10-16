import { styled } from '~/stitches.config'

export const Container = styled('footer', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'fixed',
  bottom: 0,
  
  padding: '2rem 0',
  
  '@mobileLarge': { flexDirection: 'column' }
})

export const CopyrightContent = styled('div', {
  width: '100%',
  maxWidth: 400,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  p: {
    textAlign: 'center',

    '&:first-child': { fontWeight: 500 }
  }
})