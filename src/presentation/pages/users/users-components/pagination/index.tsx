import { Button } from '~/presentation/components'

import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { Container, TotalPerPage, Buttons } from './styles'

export const Pagination = () => {
  const handleNextPage = () => {
    // if (totalCountPage > page) { setPage(page + 1) }
  }

  const handlePreviousPage = () => {
    // if (page > 1) { setPage(page - 1) }
  }

  const handleLastPage = () => {
    // setPage(totalCountPage)
  }

  const handleFirstPage = () => {
    // setPage(1)
  }

  return (
    <Container>
      <TotalPerPage>
        <p>Total de Documentos: 12</p>
      </TotalPerPage>

      <Buttons>
        <Button
          onClick={handleFirstPage}
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>

        <Button
          onClick={handlePreviousPage}
        >
          <MdKeyboardArrowLeft />
        </Button>

        <p>1 de 2</p>

        <Button
          onClick={handleNextPage}
        >
          <MdKeyboardArrowRight />
        </Button>

        <Button
          onClick={handleLastPage}
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </Buttons>
    </Container>
  )
}
