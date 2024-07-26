import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSignIn } from '~/data/usecases/hooks/use-sign-in'

import { paths } from '~/main/config'
import { changePageTitle } from '~/main/util'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

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
        <Title weight='600' color='black8'>Login</Title>

        <TextFieldGroup>
          <Label htmlFor='email'>E-mail:</Label>
          <TextField
            type='email'
            label='Seu e-mail'
            placeholder='Seu e-mail'
            id='email'
            register={register('email')}
            error={(errors.email != null)}
          />
          {(errors.email != null) && <Title margin='top' color='red9' size='sm'>{errors.email.message}</Title>}
        </TextFieldGroup>

        <TextFieldGroup>
          <Label htmlFor='password'>Senha:</Label>
          <TextField
            type={passwordState ? "text" : "password"}
            label='Sua senha'
            placeholder='Sua senha'
            id='password'
            register={register('password')}
            {...(errors.password != null && { error: true })}
            children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
          />
          {(errors.password != null) && <Title margin='top' color='red9' size='sm'>{errors.password.message}</Title>}
        </TextFieldGroup>

        <Button
          type='submit'
          color='white9'
          size='lg'
          weight='500'
          disabled={signIn.isLoading}
        >
          {signIn.isLoading ? <Spinner /> : 'Entrar'}
        </Button>

        <BottomMessages>
          <p>Ainda não tem uma conta? <Link to={`${paths.signUp}`}>Cadastre-se</Link></p>
          <p>Esqueceu sua senha? <Link to={`${paths.solicitationReset}`}>Clique aqui</Link></p>
        </BottomMessages>
      </Form>
    </Container>
  )
}
