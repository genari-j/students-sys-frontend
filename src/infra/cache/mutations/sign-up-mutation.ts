import { useMutation } from 'react-query'
import { NavigateFunction } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { createNewColaborator } from '~/infra/http/requests'
import { type SignUpProps } from '~/domain/models/sign-up'

import { paths } from '~/main/config'

export const useSignUpMutation = (navigate: NavigateFunction) =>
  useMutation(async (data: SignUpProps) => {
    const response = await createNewColaborator.create({
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      departmentId: data.departmentId,
      street: data.street,
      number: data.number,
      neighborhood: data.neighborhood,
      complement: data.complement,
      city: data.city,
      state: data.state,
      cep: data.cep
    })
    return response
  }, {
    onSuccess: (_data) => {
      const handleChangeToUsers = () => { navigate(paths.users) }
      toast.success('Cadastro realizado. Você será redirecionado para a listagem de usuários.')
      setTimeout(handleChangeToUsers, 2500)
    },
    onError: (error: any) => {
      if (error.response.status === 500) {
        toast.error('Ops, houve um erro ao tentar conexão com o servidor.')
      } else if (error.response.status === 400) {
        toast.error('Não autorizado.')
      } else if (error.response.status === 401) {
        toast.error('Não autorizado.')
      }
    }
  })
