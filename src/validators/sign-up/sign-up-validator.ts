import { z } from 'zod'

export const validateSignUpSchema = z.object({
  name: z.string().nonempty('Nome inválido'),
  email:
    z.string()
    .nonempty('E-mail inválido')
    .email('O e-mail deve conter um domínio @hotmail.com')
    .refine((value) => value.endsWith('@hotmail.com'), {
      message: 'O e-mail deve conter um domínio @hotmail.com'
    }),
  password:
    z.string()
    .nonempty('Senha inválida')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
  cpf:
    z.string()
    .nonempty('CPF inválido')
    .min(11, 'O CPF deve conter no mínimo 11 caracteres'),
  departmentId: z.number().min(1, 'Departamento inválido'),
  street: z.string().nonempty('Rua inválida'),
  number: z.string().nonempty('Número inválido'),
  neighborhood: z.string().nonempty('Bairro inválido'),
  complement: z.string().nonempty('Complemento inválido'),
  city: z.string().nonempty('Cidade inválida'),
  state: z.string().nonempty('Estado inválido'),
  cep:
    z.string()
    .nonempty('CEP inválido')
    .min(8, 'O CEP deve conter no mínimo 8 caracteres')
})
