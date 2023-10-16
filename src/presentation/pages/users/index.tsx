import { useGetUsers } from '~/infra/cache/queries'

import { changePageTitle } from '~/main/util'

import { Filters, Pagination } from './users-components'
// Table

import { Container, Content } from './styles'

export const Users = () => {
  changePageTitle('Usuários')

  const users: any = useGetUsers()

  const usersHead = [
    { name: 'Nome:' },
    { name: 'Departamento:' },
    { name: 'Perfil de Acesso:' },
    { name: 'Liberação de Acesso:' }
  ]

  return (
    <Container>
      <Content>

        <Filters />
        {/* <Table headData={usersHead} bodyData={users?.data?.data.data} /> */}
        <Pagination />

      </Content>
    </Container>
  )
}
