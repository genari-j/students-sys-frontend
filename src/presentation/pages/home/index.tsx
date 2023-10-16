import { changePageTitle } from '~/main/util'

import { Title } from '~/presentation/components'

import { Container } from './styles'

export const Classes = () => {
  changePageTitle('Classes')

  return (  
    <Container>
      <Title>Classes</Title>
    </Container>
  )
}
