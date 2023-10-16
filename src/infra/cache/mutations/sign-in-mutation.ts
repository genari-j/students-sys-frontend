import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { auth } from '~/infra/http/requests'
import { type SignInProps } from '~/domain/models/sign-in'

import { config, paths } from '~/main/config'

export const useSignInMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SignInProps) => {
    const response = await auth.login(data)
    return response
  }, {
    onSuccess: (data) => {
      const token = data?.data.data.token
      const user = data?.data.data.user

      localStorage.setItem(config.LOCAL_STORAGE_TOKEN, JSON.stringify(token))
      localStorage.setItem(config.LOCAL_STORAGE_USER, JSON.stringify(user))

      navigate(paths.classes)
    },
    onError: (error: any) => {
      if (error.response.status === 500) {
        toast.error('Houve um erro ao tentar conexão com o servidor.')
      } else if (error.response.status === 401) {
        toast.error('Não autorizado.')
      } else if (error.response.status === 400) {
        toast.error('Não autorizado.')
      }
    }
  })
