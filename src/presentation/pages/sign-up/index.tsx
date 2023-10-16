import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetDepartments } from '~/infra/cache/queries'
import { useSignUp } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { Title, Label, TextField, Select, Button, Spinner } from '~/presentation/components'
import {
  Container,
  Form,
  TextFieldGroupContainer,
  TextFieldGroupContent,
  TextFieldGroup,
  Divider,
  ShowPasswordBtn,
  BottomBtnAndMessage
} from './styles'

export const SignUp = () => {
  changePageTitle('Cadastro')
  const { signUp, onSubmit, register, handleSubmit, formState: { errors } } = useSignUp()

  const [passwordState, setPasswordState] = useState(false)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  const departments = useGetDepartments()

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Cadastro</Title>

        <TextFieldGroupContainer>
          <TextFieldGroupContent>
            <TextFieldGroup>
              <Label>Nome:</Label>
              <TextField
                type='text'
                label='Seu nome'
                placeholder='Nome'
                register={register('name')}
                error={(errors.name != null)}
              />
              {(errors.name != null) && <Title margin='top' color='error' size='small'>{errors.name.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>E-mail:</Label>
              <TextField
                type='email'
                label='Seu e-mail'
                placeholder='conta@email.com'
                register={register('email')}
                error={(errors.email != null)}
              />
              {(errors.email != null) && <Title margin='top' color='error' size='small'>{errors.email.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>CPF:</Label>
              <TextField
                type='text'
                label='Seu CPF'
                placeholder='123456789-00'
                register={register('cpf')}
                error={(errors.cpf != null)}
              />
              {(errors.cpf != null) && <Title margin='top' color='error' size='small'>{errors.cpf.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Senha:</Label>
              <TextField
                type={passwordState ? "text" : "password"}
                label='Sua senha'
                placeholder='Senha'
                register={register('password')}
                {...(errors.password != null && { error: true })}
                children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <FaEyeSlash /> : <FaEye />}</ShowPasswordBtn>}
              />
              {(errors.password != null) && <Title margin='top' color='error' size='small'>{errors.password.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Departamento:</Label>
              <Select
                label='Departamento'
                placeholder='Departamento'
                data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
                register={register('departmentId', { valueAsNumber: true })}
                {...(errors.departmentId != null && { error: 'true' })}
                name='departmentId'
              />
              {(errors.departmentId != null) && <Title margin='top' color='error' size='small'>{errors.departmentId.message}</Title>}
            </TextFieldGroup>
          </TextFieldGroupContent>

          <Divider />

          <TextFieldGroupContent>
            <TextFieldGroup>
              <Label>Rua:</Label>
              <TextField
                type='text'
                label='Sua rua'
                placeholder='Rua'
                register={register('street')}
                error={(errors.street != null)}
              />
              {(errors.street != null) && <Title margin='top' color='error' size='small'>{errors.street.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Número:</Label>
              <TextField
                type='text'
                label='Seu número'
                placeholder='1234'
                register={register('number')}
                error={(errors.number != null)}
              />
              {(errors.number != null) && <Title margin='top' color='error' size='small'>{errors.number.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Bairro:</Label>
              <TextField
                type='text'
                label='Seu bairro'
                placeholder='Bairro'
                register={register('neighborhood')}
                error={(errors.neighborhood != null)}
              />
              {(errors.neighborhood != null) && <Title margin='top' color='error' size='small'>{errors.neighborhood.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Complemento:</Label>
              <TextField
                type='text'
                label='Seu complemento'
                placeholder='Casa / Apt'
                register={register('complement')}
                error={(errors.complement != null)}
              />
              {(errors.complement != null) && <Title margin='top' color='error' size='small'>{errors.complement.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Cidade:</Label>
              <TextField
                type='text'
                label='Sua cidade'
                placeholder='Cidade'
                register={register('city')}
                error={(errors.city != null)}
              />
              {(errors.city != null) && <Title margin='top' color='error' size='small'>{errors.city.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>Estado:</Label>
              <TextField
                type='text'
                label='Seu estado'
                placeholder='São Paulo'
                register={register('state')}
                error={(errors.state != null)}
              />
              {(errors.state != null) && <Title margin='top' color='error' size='small'>{errors.state.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label>CEP:</Label>
              <TextField
                type='text'
                label='Seu CEP'
                placeholder='12345-123'
                register={register('cep')}
                error={(errors.cep != null)}
              />
              {(errors.cep != null) && <Title margin='top' color='error' size='small'>{errors.cep.message}</Title>}
            </TextFieldGroup>
          </TextFieldGroupContent>
        </TextFieldGroupContainer>

        <BottomBtnAndMessage>
          <Button
            type='submit'
            variant='general'
            color='white'
            disabled={signUp.isLoading}
            >
            {signUp.isLoading ? <Spinner /> : 'Cadastrar'}
          </Button>

          <p>Já possui uma conta? <Link to='/'>Entrar</Link></p>
        </BottomBtnAndMessage>
      </Form>

    </Container>
  )
}
