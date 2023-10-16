import { type ApiResponse } from '~/domain/models'

export interface Departments {
  id: number
  name: string
  createdAt: string
}

export interface DepartmentsProps extends ApiResponse {
  data: Departments[]
}