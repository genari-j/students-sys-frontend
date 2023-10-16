import { api } from '~/infra/http'
import { paths } from '~/main/config'

export const getAllUsers = {
  listAll: async () => await api.get(paths.allUsers)
}
