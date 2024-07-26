import { type ApiResponse } from '~/domain/models'

export interface StudentsClass {
  classes: {
    id: number
    code: string
    model: string
    floor: string
    studentsAmount: string
    startDate: Date
    endDate: Date
    createdAt: string
  }
}

export interface StudentsClassProps extends ApiResponse {
  data: StudentsClass[]
  total: number
  limit: number
  pages: number
  page: number
}