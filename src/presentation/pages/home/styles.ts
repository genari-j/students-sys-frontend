import { styled } from '~/stitches.config'

export const Container = styled('main', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center'
})

export const Content = styled('div', {
  width: '100%',
  maxWidth: 900,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem'
})