import { styled } from '~/stitches.config'

export const Container = styled('main', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@laptop': { padding: '0 1rem' }
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

export const ShowPasswordBtn = styled('button', {
  display: 'flex',
  
  fontSize: '1.5rem',

  background: 'none',
})

export const BottomMessages = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',

  marginTop: '1rem',

  p: {
    a: {
      fontWeight: 500,
      
      transition: '.3s ease',

      color: '$green8',

      '&:hover': { textDecoration: 'underline', color: '$green9' }
    }
  },
})