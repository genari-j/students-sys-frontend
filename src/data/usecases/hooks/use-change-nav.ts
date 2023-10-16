import { useNavigate } from 'react-router-dom'
import { paths } from '~/main/config'

export const useChangeNavigation = () => {
  const navigate = useNavigate()

  const handleChangeToHome = () => {
    navigate(paths.classes)
  }

  const handleChangeToUsers = () => {
    navigate(paths.users)
  }

  return {
    handleChangeToHome,
    handleChangeToUsers
  }
}
