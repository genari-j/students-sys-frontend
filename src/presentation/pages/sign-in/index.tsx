import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSignIn } from '~/data/usecases/hooks/use-sign-in'

import { paths } from '~/main/config'
import { changePageTitle } from '~/main/util'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

import { Title, Label, TextField, Button, Spinner } from '~/presentation/components'

import {
  Container,
  Form,
  TextFieldGroup,
  ShowPasswordBtn,
  BottomMessages
} from './styles'

export const SignIn = () => {
  changePageTitle('Entrar')
  const { signIn, onSubmit, register, handleSubmit, formState: { errors } } = useSignIn()
  
  const [passwordState, setPasswordState] = useState(false)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <TextFieldGroup>
          <Label>E-mail:</Label>
          <TextField
            type='email'
            label='Seu e-mail'
            placeholder='Seu e-mail'
            register={register('email')}
            error={(errors.email != null)}
          />
          {(errors.email != null) && <Title margin='top' color='error' size='small'>{errors.email.message}</Title>}
        </TextFieldGroup>

        <TextFieldGroup>
          <Label>Senha:</Label>
          <TextField
            type={passwordState ? "text" : "password"}
            label='Sua senha'
            placeholder='Sua senha'
            register={register('password')}
            {...(errors.password != null && { error: true })}
            children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <FaEyeSlash /> : <FaEye />}</ShowPasswordBtn>}
          />
          {(errors.password != null) && <Title margin='top' color='error' size='small'>{errors.password.message}</Title>}
        </TextFieldGroup>

        <Button
          type='submit'
          variant='general'
          color='white'
          disabled={signIn.isLoading}
        >
          {signIn.isLoading ? <Spinner /> : 'Entrar'}
        </Button>

        <BottomMessages>
          <p>Ainda não tem uma conta? <Link to={`${paths.signUp}`}>Cadastre-se</Link></p>
          <p>Esqueceu sua senha? <Link to='/'>Clique aqui</Link></p>
        </BottomMessages>
      </Form>
    </Container>
  )
}
