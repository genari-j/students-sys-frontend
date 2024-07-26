import { z } from 'zod'

export const validateConfirmPasswordSchema = z.object({
  password: z.string()
    .nonempty('Senha inválida')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
  confirmPassword: z.string()
    .nonempty('Confirmação inválida')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword']
})
