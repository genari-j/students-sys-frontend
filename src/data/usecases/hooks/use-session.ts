import { config } from '~/main/config'

interface UserProps {
  id: number
  name: string | null
  email: string
  cpf: string
  active: number
  departmentId: number
  avatar: string | null
  createdAt: string
}

export const useSession = () => {
  const userGetToken = localStorage.getItem(config.LOCAL_STORAGE_TOKEN)
  const userToken = JSON.parse(userGetToken as string)

  const isSignedIn = (): boolean => {
    const userGetToken = localStorage.getItem(config.LOCAL_STORAGE_TOKEN)
    const userToken = JSON.parse(userGetToken as string)
    return userToken !== null
  }

  const user = localStorage.getItem(config.LOCAL_STORAGE_USER)
  const userInfos: UserProps = JSON.parse(user as string)

  return ({
    isSignedIn,
    userToken,
    userInfos
  })
}
