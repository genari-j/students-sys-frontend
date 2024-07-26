import { Link } from 'react-router-dom'
import { paths } from '~/main/config'

import { useExportColaborators } from '~/data/usecases/hooks'

import { TextField } from '~/presentation/components'

import { BiExport, BiSearchAlt } from 'react-icons/bi'
import { HiOutlinePlusSm } from 'react-icons/hi'

import {
  Container,
  SearchInputContainer,
  SearchInputWidth,
  RegisterNewUser
} from './styles'

export const Filters = () => {
  const { exportColaboratorsToExcel } = useExportColaborators()

  return (
    <Container>
      <SearchInputContainer>
        <SearchInputWidth>
          <TextField
            label='Busca'
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

      <div>
        <button type='button' onClick={exportColaboratorsToExcel}><i><BiExport /></i> Exportação</button>
      </div>
    </Container>
  )
}
