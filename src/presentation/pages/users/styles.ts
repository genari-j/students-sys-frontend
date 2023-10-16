import { styled } from '~/stitches.config'

export const Container = styled('main', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: 1000,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem'
})
