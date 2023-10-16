import { Container } from './styles'

interface TableProps {
  headData: Array<{ name: string }>
  bodyData: Array<{
    id: number
    name: string
    username: string
    email: string
    active: number
    activationCode: number
    privAdmin: number
    mfa: string | null
    userDir: number
    userApprov: number
    avatar: string | null
    departmentId: number
    profileId: number
    createdAt: string
  }>
}

export const Table = ({ headData, bodyData }: TableProps) => {
  return (
    <Container>
      <thead>
        <tr>
          {headData?.map((item, index) => (
            <th key={index}>{item?.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {bodyData?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.name}</td>
            <td>{row.departmentId}</td>
            <td>{row.profileId}</td>
            <td>Desativar | Ativar</td>
          </tr>
        ))}
      </tbody>
    </Container>
  )
}
