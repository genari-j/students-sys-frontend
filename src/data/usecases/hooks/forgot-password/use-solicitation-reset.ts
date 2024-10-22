import { useNavigate } from 'react-router-dom'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useSolicitationResetMutation } from '~/infra/cache/mutations'
import { type SolicitationResetProps } from '~/domain/models/forgot-password'

import { zodResolver } from '@hookform/resolvers/zod'
import { validateSolicitationResetSchema } from '~/validators'

export const useSolicitationReset = () => {
  const navigate = useNavigate()

  const solicitationReset = useSolicitationResetMutation(navigate)

  const form = useForm<SolicitationResetProps>({
    resolver: zodResolver(validateSolicitationResetSchema)
  })

  const onSubmit: SubmitHandler<SolicitationResetProps> = (data) => {
    solicitationReset.mutate(data)
  }

  return {
    ...form,
    onSubmit,
    solicitationReset
  }
}
