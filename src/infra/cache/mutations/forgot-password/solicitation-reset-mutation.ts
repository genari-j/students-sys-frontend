import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { solicitationReset } from '~/infra/http/requests'
import { type SolicitationResetProps } from '~/domain/models/forgot-password'

import { paths } from '~/main/config'

export const useSolicitationResetMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SolicitationResetProps) => {
    const response = await solicitationReset.solicitationReset({
      email: data.email
    })
    return response
  }, {
    onSuccess: (_data) => {
      toast.success('Um Link com instruções para redefinição foi enviado ao e-mail informado.')
      const handleChangeToLogin = () => { navigate(paths.signIn) }
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
