import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type SignUpProps } from '~/domain/models/sign-up'

export const createNewColaborator = {
  create: async (data: SignUpProps) => await api.post(paths.createNewColaborator, {
    ...data
  })
}
