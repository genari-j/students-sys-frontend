import { Link, Outlet } from 'react-router-dom'
import { useLogout, useSession } from '~/data/usecases/hooks'
import { paths } from '~/main/config'

import { Logo } from '~/presentation/components'

import { FaUser } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'
import { RiLock2Fill } from 'react-icons/ri'
import { GiExitDoor } from 'react-icons/gi'

import {
  Container,
  Content,
  PrimaryUnorderedList,
  GearIcon
} from './styles'

export const Header = ({ showUserInformation }: { showUserInformation: boolean }) => {
  const { userInfos } = useSession()
  const { handleLogout } = useLogout()

  return (
    <>
      <Container>
        <Content>
          <Logo />

          {showUserInformation && (
            <nav>
              <PrimaryUnorderedList>
                {userInfos?.name ? <li>{userInfos.name.split(' ')[0]}</li> : <li>{userInfos.name}</li>}
                <GearIcon>
                  <i><BsFillGearFill /></i>
                  <ul>
                    <li><i><RiLock2Fill /></i> <Link to={`${paths.signIn}`}>Alterar Senha</Link></li>
                    <li><i><FaUser /></i> <Link to={`${paths.users}`}>Usuários</Link></li>
                    <li><i><GiExitDoor /></i> <button type='button' onClick={handleLogout}>Sair</button></li>
                  </ul>
                </GearIcon>
              </PrimaryUnorderedList>
            </nav>
          )}
        </Content>
      </Container>
      <Outlet></Outlet>
    </>
  )
}
