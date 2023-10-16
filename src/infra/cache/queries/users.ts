import { useQuery } from 'react-query'
import { getAllUsers } from '~/infra/http/requests'
import { type AxiosResponse } from 'axios'
import { type UsersProps } from '~/domain/models/users'

export const useGetUsers = () =>
  useQuery<AxiosResponse<UsersProps>>('users', async () => await getAllUsers.listAll())
