import { useQuery } from 'react-query'
import { getAllStudentsClass } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type StudentsClassProps } from '~/domain/models/students-class'

interface FiltersProps {
  code?: string
  model?: string
  floor?: string
  studentsAmount?: string
}

export const useGetStudentsClass = (page = 1, filters: FiltersProps = { code: "", model: "", floor: "", studentsAmount: "" }) =>
  useQuery<AxiosResponse<StudentsClassProps>>([`students-class-${page}-${Object.entries(filters).toString().replace(',', '-')}`, page], async () => await getAllStudentsClass.listAll(page, filters))
