export interface UsersProps {
  id: number
  name: string
  username: string
  email: string
  password: string
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
}
