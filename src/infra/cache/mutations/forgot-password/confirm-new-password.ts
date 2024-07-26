import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { confirmNewPassword } from '~/infra/http/requests'
import { type ConfirmNewPasswordProps } from '~/domain/models/forgot-password'

import { paths } from '~/main/config'

export const useConfirmNewPasswordMutation = (token: any, navigate: NavigateFunction) =>
  useMutation(async (data: ConfirmNewPasswordProps) => {
    const response = await confirmNewPassword.updatePassword({
      password: data.password,
      confirmPassword: data.confirmPassword
    }, token)
    return response
  }, {
    onSuccess: (_data) => {
      const handleChangeToLogin = () => { navigate(paths.signIn) }
      toast.success('Redefinição realizada. Você será redirecionado para a área de Login.')
      setTimeout(handleChangeToLogin, 2500)
    },
    onError: (error: any) => {
      if (error.response.status === 500) {
        toast.error('Algo saiu como não esperado. Contate o Administrador.')
      } else if (error.response.status === 400) {
        toast.error('Algum erro ocorreu ao efetuar a solicitação.')
      } else if (error.response.status === 401) {
        toast.error('Não autorizado.')
      }
    }
  })
