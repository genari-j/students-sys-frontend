import { execDownload } from '~/infra/http'
import { paths } from '~/main/config'

export const exportColaborators = {
  colaboratorsToExcel: async () => {
    return await execDownload.get<ArrayBuffer, any>(`${paths.exportColaborators}`)
  }
}