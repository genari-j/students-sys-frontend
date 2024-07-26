import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useGetStudentsClass } from '~/infra/cache/queries'
import { useExportColaborators } from '~/data/usecases/hooks'

import { paths, classScreenTitleListing } from '~/main/config'
import { changePageTitle } from '~/main/util'
import { format } from 'date-fns'

import {
  Filters,
  Pagination,
  Spinner,
  Table,
  Title
} from '~/presentation/components'

import {
  Container,
  Content
} from './styles'
import { BiExport } from 'react-icons/bi'

export const Classes = () => {
  changePageTitle('Distribuição de Turmas')
  const navigate = useNavigate()

  const dataName = 'Turmas'
  const [page, setPage] = useState(1)
  const [filters, setFilters] = useState<{
    code?: undefined
    model?: undefined
    floor?: undefined
    studentsAmount?: undefined
  }>({
    code: undefined,
    model: undefined,
    floor: undefined,
    studentsAmount: undefined
  })

  const studentsClass = useGetStudentsClass(page, filters)

  const tableData = studentsClass.data?.data.data.map(item => [
    item.classes.code,
    item.classes.model,
    item.classes.floor,
    item.classes.studentsAmount,
    format(new Date(item.classes.startDate), 'dd/MM/yyyy'),
    format(new Date(item.classes.endDate), 'dd/MM/yyyy')
  ])

  const handleSelectedItem = (code: string | number | Date) => {
    navigate(`${paths.studentsClass}/${code}`)
  }

  const { exportColaboratorsToExcel } = useExportColaborators()

  return (
    <Container>
      <Content>

        <Title weight='600' color='black8'>
          Distribuição de Turmas
        </Title>

        <div>
          <button type='button' onClick={exportColaboratorsToExcel}><i><BiExport /></i> Exportação</button>
        </div>

        <Filters<any>
          data={studentsClass}
          filters={filters}
          setFilters={setFilters}
        />

        {studentsClass.isLoading
          ? <Spinner bgColor='#1B8C76' />
          : <Table
              titles={classScreenTitleListing}
              data={tableData}
              hoverEffect={true}
              handleSelectedItem={handleSelectedItem}
            />
        }

        <Pagination
          data={studentsClass}
          page={page}
          setPage={setPage}
          dataName={dataName}
        />

      </Content>
    </Container>
  )
}
