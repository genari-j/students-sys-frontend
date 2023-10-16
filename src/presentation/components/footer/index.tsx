import { Outlet } from 'react-router-dom'

import { Image } from '~/presentation/components'
import StudentsImg from '~/main/assets/images/students.png'

import { Container, CopyrightContent } from './styles'

export const Footer = ({ showFooterInformation }: { showFooterInformation: boolean }) => {
  return (
    <>
      {showFooterInformation && (
        <Container>
          <Image
            src={StudentsImg}
            alt='Company Logo'
            size='small'
          />

          <CopyrightContent>
            <p>Students Sys.</p>
            <p>Copyrigth © {new Date().getFullYear()}. Todos os direitos reservados.</p>
          </CopyrightContent>
        </Container>
      )}
      <Outlet></Outlet>
    </>
  )
}
