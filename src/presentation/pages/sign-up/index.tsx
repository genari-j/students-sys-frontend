import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGetDepartments } from '~/infra/cache/queries'
import { useSignUp } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
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
        <Title weight='600' color='black8'>Cadastro</Title>

        <TextFieldGroupContainer>
          <TextFieldGroupContent>
            <TextFieldGroup>
              <Label htmlFor='name'>Nome:</Label>
              <TextField
                type='text'
                label='Seu nome'
                placeholder='Nome'
                id='name'
                register={register('name')}
                error={(errors.name != null)}
              />
              {(errors.name != null) && <Title margin='top' color='red9' size='sm'>{errors.name.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='email'>E-mail:</Label>
              <TextField
                type='email'
                label='Seu e-mail'
                placeholder='conta@email.com'
                id='email'
                register={register('email')}
                error={(errors.email != null)}
              />
              {(errors.email != null) && <Title margin='top' color='red9' size='sm'>{errors.email.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='cpf'>CPF:</Label>
              <TextField
                type='text'
                label='Seu CPF'
                placeholder='123456789-00'
                id='cpf'
                register={register('cpf')}
                error={(errors.cpf != null)}
              />
              {(errors.cpf != null) && <Title margin='top' color='red9' size='sm'>{errors.cpf.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='password'>Senha:</Label>
              <TextField
                type={passwordState ? "text" : "password"}
                label='Sua senha'
                placeholder='Senha'
                id='password'
                register={register('password')}
                {...(errors.password != null && { error: true })}
                children={<ShowPasswordBtn type='button' onClick={handleShowPassword}>{passwordState ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</ShowPasswordBtn>}
              />
              {(errors.password != null) && <Title margin='top' color='red9' size='sm'>{errors.password.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='department'>Departamento:</Label>
              <Select
                label='Departamento'
                placeholder='Departamento'
                data={!departments.isLoading && departments.isSuccess ? departments.data?.data.data : []}
                id='department'
                register={register('departmentId', { valueAsNumber: true })}
                {...(errors.departmentId != null && { error: true })}
                name='departmentId'
              />
              {(errors.departmentId != null) && <Title margin='top' color='red9' size='sm'>{errors.departmentId.message}</Title>}
            </TextFieldGroup>
          </TextFieldGroupContent>

          <Divider />

          <TextFieldGroupContent>
            <TextFieldGroup>
              <Label htmlFor='street'>Rua:</Label>
              <TextField
                type='text'
                label='Sua rua'
                placeholder='Rua'
                id='street'
                register={register('street')}
                error={(errors.street != null)}
              />
              {(errors.street != null) && <Title margin='top' color='red9' size='sm'>{errors.street.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='number'>Número:</Label>
              <TextField
                type='text'
                label='Seu número'
                placeholder='1234'
                id='number'
                register={register('number')}
                error={(errors.number != null)}
              />
              {(errors.number != null) && <Title margin='top' color='red9' size='sm'>{errors.number.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='neighborhood'>Bairro:</Label>
              <TextField
                type='text'
                label='Seu bairro'
                placeholder='Bairro'
                id='neighborhood'
                register={register('neighborhood')}
                error={(errors.neighborhood != null)}
              />
              {(errors.neighborhood != null) && <Title margin='top' color='red9' size='sm'>{errors.neighborhood.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='complement'>Complemento:</Label>
              <TextField
                type='text'
                label='Seu complemento'
                id='complement'
                placeholder='Casa / Apt'
                register={register('complement')}
                error={(errors.complement != null)}
              />
              {(errors.complement != null) && <Title margin='top' color='red9' size='sm'>{errors.complement.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='city'>Cidade:</Label>
              <TextField
                type='text'
                label='Sua cidade'
                placeholder='Cidade'
                id='city'
                register={register('city')}
                error={(errors.city != null)}
              />
              {(errors.city != null) && <Title margin='top' color='red9' size='sm'>{errors.city.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='state'>Estado:</Label>
              <TextField
                type='text'
                label='Seu estado'
                placeholder='São Paulo'
                id='state'
                register={register('state')}
                error={(errors.state != null)}
              />
              {(errors.state != null) && <Title margin='top' color='red9' size='sm'>{errors.state.message}</Title>}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='cep'>CEP:</Label>
              <TextField
                type='text'
                label='Seu CEP'
                placeholder='12345-123'
                id='cep'
                register={register('cep')}
                error={(errors.cep != null)}
              />
              {(errors.cep != null) && <Title margin='top' color='red9' size='sm'>{errors.cep.message}</Title>}
            </TextFieldGroup>
          </TextFieldGroupContent>
        </TextFieldGroupContainer>

        <BottomBtnAndMessage>
          <Button
            type='submit'
            color='white9'
            size='lg'
            weight='500'
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
