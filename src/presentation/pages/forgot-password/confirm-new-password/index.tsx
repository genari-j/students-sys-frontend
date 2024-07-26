// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// import { useNewPassword } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'

import { Title, Label, TextField, Button } from '~/presentation/components'
// Spinner

import {
  Container,
  Form,
  TextFieldGroup
} from './styles'

export const SolicitationReset = () => {
  changePageTitle('Students Sys | Confirmação de Senha')
  // const { newPassword, onSubmit, register, handleSubmit, formState: { errors } } = useNewPassword()

  // const [loading, setLoading] = useState(true)
  // const [validToken, setValidToken] = useState(false)

  // const location = useLocation()
  // const token = location.search.replace('?token=', '')
  // const config = { headers: { Authorization: `Bearer ${token}` } }

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_APP_API_HOST}/verify-token`, config)
  //   .then(response => {
  //     if (response.status === 200) {
  //       setValidToken(true)
  //       setLoading(false)
  //     } else if (response.status !== 200) {
  //       setLoading(false)
  //       return <Error />
  //     }
  //   })
  // }, [])

  return (
    <Container>
      {/* {loading && <Spinner />} */}
      {/* validToken && ( */}
      <Title>Preencha os campos abaixo para a confirmação do Reset de Senha</Title>

      {/* onSubmit={handleSubmit(onSubmit)} */}
      <Form>
        <TextFieldGroup>
          <Label htmlFor='newPassword'>Nova Senha:</Label>
          <TextField
            type='newPassword'
            label='Nova Senha'
            placeholder='Nova Senha'
            id='newPassword'
            // register={register('newPassword')}
            // {...(errors.newPassword != null && { error: true })}
          />
          {/* {(errors.newPassword != null) && <Title margin='top' color='red9' size='sm'>{errors.newPassword.message}</Title>} */}
        </TextFieldGroup>

        <TextFieldGroup>
          <Label htmlFor='confirmPassword'>Confirme:</Label>
          <TextField
            type='confirmPassword'
            label='Confirme a nova senha'
            placeholder='Confirme a nova senha'
            id='confirmPassword'
            // register={register('confirmPassword')}
            // {...(errors.confirmPassword != null && { error: true })}
          />
          {/* {(errors.confirmPassword != null) && <Title margin='top' color='red9' size='sm'>{errors.confirmPassword.message}</Title>} */}
        </TextFieldGroup>

        <Button
          type='submit'
          color='white9'
          size='lg'
          weight='500'
          // disabled={newPassword.isLoading}
        >
          {/* {newPassword.isLoading ? <Spinner /> : 'Entrar'} */}
          Solicitar
        </Button>
      </Form>
      {/* ) */}
    </Container>
  )
}