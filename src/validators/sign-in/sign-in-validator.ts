import { z } from 'zod'

export const validateSignInSchema = z.object({
  email: z.string().nonempty('E-mail inválido'),
  password: z.string().nonempty('Senha inválida')
})
