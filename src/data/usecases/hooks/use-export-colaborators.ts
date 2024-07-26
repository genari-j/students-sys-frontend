import { useExportColaboratorsMutation } from '~/infra/cache/mutations'

export const useExportColaborators = () => {
  const exportColaborators = useExportColaboratorsMutation()

  const exportColaboratorsToExcel = () => {
    exportColaborators.mutate()
  }

  return {
    exportColaboratorsToExcel
  }
}