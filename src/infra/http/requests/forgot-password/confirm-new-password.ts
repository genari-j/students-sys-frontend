import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type ConfirmNewPasswordProps } from '~/domain/models/forgot-password'

export const confirmNewPassword = {
  updatePassword: async (data: ConfirmNewPasswordProps, token: any) => {
    await api.post(paths.updatePassword, {
      ...data
    }, token)
  }
}