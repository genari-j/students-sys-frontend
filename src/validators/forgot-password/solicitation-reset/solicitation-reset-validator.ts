import { z } from 'zod'

export const validateSolicitationResetSchema = z.object({
  email: z.string()
    .nonempty('E-mail inválido')
    .email('O e-mail deve conter um domínio @hotmail.com')
    .refine((value) => value.endsWith('@hotmail.com'), {
      message: 'O e-mail deve conter um domínio @hotmail.com'
    })
})
