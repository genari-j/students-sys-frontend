import { styled } from '~/stitches.config'

export const Container = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',

  position: 'relative',

  borderRadius: '0.3rem',

  background: '$gray6'
})

export const InputModel = styled('input', {
  width: '100%',

  transition: '.3s',

  fontSize: '1.1rem',
  padding: '0.5rem 1rem',
  '&.with-icon': { padding: '0.5rem 2.8rem 0.5rem 1rem'},
  borderRadius: '0.3rem',
  
  border: '2px solid transparent',
  background: 'transparent',
  
  '&:hover': { border: '2px solid $gray9' },
  '&:focus': { border: '2px solid $green8', boxShadow: '2px 3px 3px #D1D1D1' },
  '&::placeholder': { color: '$gray9' }
})

export const Icon = styled('i', {
  display: 'flex',

  position: 'absolute',
  right: '0.5rem',

  fontSize: '1.5rem',
  padding: '0 0.3rem',

  background: 'transparent'
})