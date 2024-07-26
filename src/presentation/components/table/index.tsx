import { truncateInformation } from '~/main/util'
import { TableModel } from './styles'

interface TableProps {
  titles: string[]
  data?: (string | number | Date)[][]
  handleSelectedItem?: (code: string | number | Date) => void
  hoverEffect?: boolean
}

export const Table = ({ titles, data, handleSelectedItem, hoverEffect }: TableProps) => {
  return (
    <TableModel>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((line, rowIndex) => (
          <tr
            key={rowIndex}
            role='button'
            className={hoverEffect && hoverEffect === true ? 'hover-effect' : ''}
            onClick={() => { handleSelectedItem && handleSelectedItem(line[0]) }}
          >
            {line.map((value, columnIndex) => (
              <td key={columnIndex}>{truncateInformation(String(value))}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableModel>
  )
}