import { styled } from '~/stitches.config'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const TotalPerPage = styled('div', {
  fontWeight: 600
})

export const Buttons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 3,

  fontWeight: 600,

  p: {
    paddingX: 5
  }
})
