import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type SignInProps } from '~/domain/models/sign-in'

export const auth = {
  login: async (data: SignInProps) => await api.post(paths.userAuth, {
    ...data
  })
}
