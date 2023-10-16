import { Link } from 'react-router-dom'
import { paths } from '~/main/config'

import { TextField } from '~/presentation/components'

import { BiSearchAlt } from 'react-icons/bi'
import { HiOutlinePlusSm } from 'react-icons/hi'

import {
  Container,
  SearchInputContainer,
  SearchInputWidth,
  RegisterNewUser
} from './styles'

export const Filters = () => {
  return (
    <Container>
      <SearchInputContainer>
        <SearchInputWidth>
          <TextField
            type='text'
            aria-label='Busca rápida'
            placeholder='Digite aqui sua busca'
            name=''
          />
        </SearchInputWidth>
        <button type='button'> <i><BiSearchAlt /></i> </button>
      </SearchInputContainer>

      <RegisterNewUser>
        <Link to={`${paths.signUp}`}> <i><HiOutlinePlusSm /></i> Novo </Link>
      </RegisterNewUser>
    </Container>
  )
}
