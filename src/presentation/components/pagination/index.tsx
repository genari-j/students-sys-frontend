import { Dispatch, SetStateAction } from 'react'
import { UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'

import { Title, IconBtn } from '~/presentation/components'

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md'

import {
  Container,
  ButtonsBox,
  PageInfos
} from './styles'

interface PaginationProps {
  data: UseQueryResult<AxiosResponse<any>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  dataName: string
}

export const Pagination = ({ data, page, setPage, dataName }: PaginationProps) => {
  const totalCountPage = data.data?.data.pages
  const totalCount = data.data?.data.total

  const handleNextPage = () => { if (totalCountPage > page) { setPage(page + 1) } }
  const handlePreviousPage = () => { if (page > 1) { setPage(page - 1) } }
  const handleLastPage = () => { setPage(totalCountPage) }
  const handleFirstPage = () => { setPage(1) }

  return (
    <Container>
      <Title
        size='nl'
        weight={600}
      >
        Total de {dataName}: {totalCount}
      </Title>

      <ButtonsBox>
        <IconBtn
          height='sm'
          width='sm'
          radius='xl2'
          size='xl'
          onClick={handleFirstPage}
        >
          <MdKeyboardDoubleArrowLeft />
        </IconBtn>

        <IconBtn
          height='sm'
          width='sm'
          radius='xl2'
          size='xl'
          onClick={handlePreviousPage}
        >
          <MdKeyboardArrowLeft />
        </IconBtn>

        <PageInfos>
          <span>{page}</span>
          <span>de</span>
          <span>{totalCountPage}</span>
        </PageInfos>

        <IconBtn
          height='sm'
          width='sm'
          radius='xl2'
          size='xl'
          onClick={handleNextPage}
        >
          <MdKeyboardArrowRight />
        </IconBtn>

        <IconBtn
          height='sm'
          width='sm'
          radius='xl2'
          size='xl'
          onClick={handleLastPage}
        >
          <MdKeyboardDoubleArrowRight />
        </IconBtn>
      </ButtonsBox>
    </Container>
  )
}
