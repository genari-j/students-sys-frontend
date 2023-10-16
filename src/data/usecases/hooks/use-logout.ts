import { useNavigate } from 'react-router-dom'
import { paths, config } from '~/main/config'

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(config.LOCAL_STORAGE_TOKEN)
    localStorage.removeItem(config.LOCAL_STORAGE_USER)
    navigate(paths.signIn)
  }

  return {
    handleLogout
  }
}
