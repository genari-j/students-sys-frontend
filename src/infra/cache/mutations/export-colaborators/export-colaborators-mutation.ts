import { useMutation } from 'react-query'
import { exportColaborators } from '~/infra/http/requests'
import { saveAs } from 'file-saver'
import toast from 'react-hot-toast'

export const useExportColaboratorsMutation = () =>
  useMutation(async () => {
    const response = await exportColaborators.colaboratorsToExcel()
    return response
  }, {
    onSuccess: ({ data }) => {
      saveAs((new Blob([data])), 'colaborators.xlsx')
      toast.success('Download realizado.')
    },
    onError: (error) => {
      console.log(error)
      toast.error('Houve problemas ao tentar realizar o download.')
    }
  })