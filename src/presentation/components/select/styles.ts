import { styled } from '~/stitches.config'

export const Container = styled('select', {
  width: '100%',

  transition: '.3s',

  fontSize: '1.1rem',
  padding: '0.5rem',
  border: '2px solid transparent',
  borderRadius: '0.3rem',

  background: '$gray6',

  '&:hover': { border: '2px solid $gray7' },
  '&:focus': { border: '2px solid $green8', boxShadow: '2px 3px 3px #D1D1D1' },
  '&::placeholder': { color: '$gray9' }
})
