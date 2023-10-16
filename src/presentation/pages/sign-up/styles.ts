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

  form: {
    maxWidth: 900,
    h2: { '&:first-child': { marginBottom: '2rem' } },

    p: {
      a: {
        fontWeight: 500,

        transition: '.3s ease',
  
        color: '$green8',
  
        '&:hover': { textDecoration: 'underline', color: '$green9' }
      }
    }
  },

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

export const TextFieldGroupContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const TextFieldGroupContent = styled('div', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '1rem'
})

export const TextFieldGroup = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const Divider = styled('div', {
  width: '100%',
  height: '0.2rem',

  borderRadius: '0.5rem',

  background: '$green7'
})

export const CityStateAndCountry = styled('div', {
  width: '100%',

  display: 'flex',
  gap: '1rem'
})

export const SpaceBetweenElements = styled('div', {
  height: 20
})

export const ShowPasswordBtn = styled('button', {
  display: 'flex',
  
  fontSize: '1.5rem',

  background: 'none',
})

export const BottomBtnAndMessage = styled('div', {
  width: '100%',
  maxWidth: 450,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',

  marginTop: '1rem'
})