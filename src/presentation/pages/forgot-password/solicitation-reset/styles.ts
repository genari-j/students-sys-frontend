import { styled } from '~/stitches.config'

export const Container = styled('div' ,{
  width: '100%',

  border: '1px solid red'
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: 450,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  h2: { '&:first-child': { marginBottom: '1rem' } }
})

export const TextFieldGroup = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})