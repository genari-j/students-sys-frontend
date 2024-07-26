import { api } from '~/infra/http'
import { paths } from '~/main/config'

interface FiltersProps {
  code?: string
  model?: string
  floor?: string
  studentsAmount?: string
}

export const getAllStudentsClass = {
  listAll: async (page = 1, filters: FiltersProps = { code: "", model: "", floor: "", studentsAmount: "" }) => {
    const { code, model, floor, studentsAmount } = filters
    let queryParams

    if (code || model || floor || studentsAmount) {
      queryParams = new URLSearchParams({
        code: code ? String(code) : "",
        model: model ? String(model) : "",
        floor: floor ? String(floor) : "",
        studentsAmount: studentsAmount ? String(studentsAmount) : ""
      })
    } else {
      queryParams = new URLSearchParams({
        page: String(page)
      })
    }

    const url = `${paths.studentsClass}?${queryParams}`
    return await api.get(url)
  }
}
