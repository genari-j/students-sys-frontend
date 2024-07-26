import { Title, Label, TextField, Button } from '~/presentation/components'

import {
  Container,
  Form,
  TextFieldGroup
} from './styles'

export const SolicitationReset = () => {
  return (
    <Container>
      <Title>Solicitação para Reset de Senha</Title>

      <Form>
        <TextFieldGroup>
          <Label htmlFor='email'>Senha:</Label>
          <TextField
            type='email'
            label='Seu e-mail'
            placeholder='Seu E-mail'
            id='email'
            // register={register('password')}
            // {...(errors.password != null && { error: true })}
          />
          {/* {(errors.password != null) && <Title margin='top' color='red9' size='sm'>{errors.password.message}</Title>} */}
        </TextFieldGroup>

        <Button
          type='submit'
          color='white9'
          size='lg'
          weight='500'
          // disabled={signIn.isLoading}
        >
          {/* {signIn.isLoading ? <Spinner /> : 'Entrar'} */}
          Solicitar
        </Button>
      </Form>
    </Container>
  )
}