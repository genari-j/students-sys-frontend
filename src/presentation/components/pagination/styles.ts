import { styled } from '~/stitches.config'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const ButtonsBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 3
})

export const PageInfos = styled('div', {
  display: 'flex',
  gap: 5,

  padding: '0 0.5rem',

  span: { fontWeight: 500 }
})