import { useChangeNavigation } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'
import FaviconImg from '~/main/assets/images/favicon.png'
import StudentsSys from '~/main/assets/images/students.png'

import { Button } from '~/presentation/components'

import { Container, Content, ButtonBox } from './styles'

export const NotFound = () => {
  changePageTitle('Página não encontrada')
  const { handleChangeToHome } = useChangeNavigation()

  return (
    <Container>

      <Content>
        <img src={FaviconImg} alt="Company Logo" />

        <div>
          <p>Ops, a página não foi encontrada! 💬</p>
          <ButtonBox>
            <Button
              color='white9'
              size='lg'
              weight='500'
              onClick={handleChangeToHome}
            >
              Voltar
            </Button>
          </ButtonBox>
        </div>

        <img src={StudentsSys} alt="Students Sys" />
      </Content>
      
    </Container>
  )
}
