import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type SolicitationResetProps } from '~/domain/models/forgot-password'

export const solicitationReset = {
  solicitationReset: async (data: SolicitationResetProps) => await api.post(paths.solicitationResetEmail, {
    ...data
  })
}