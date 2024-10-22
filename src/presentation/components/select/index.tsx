import type * as Stitches from '@stitches/react'
import { SelectHTMLAttributes } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'
import { Container } from './styles'

export type StyledSelectVariants = Stitches.VariantProps<typeof Container>

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register?: UseFormRegisterReturn
  defaultValue?: number
  placeholder?: string
  error?: boolean | string
  label?: string
  data: Array<{ id: number, name: string }>
}

export type CombinedSelectProps = SelectProps & StyledSelectVariants

export const Select = ({ register, defaultValue = 0, placeholder, error, label, data, ...rest }: CombinedSelectProps) => (
  <Container
    aria-label={label}
    defaultValue={defaultValue}
    name={register?.name}
    ref={register?.ref}
    onChange={register?.onChange}
    className={error && error === true ? 'with-error' : ''}
    {...(error && { error: 'true' } )}
    {...rest}
  >
    <option value={0} className="custom-option">{placeholder ?? 'Selecione uma opção'}</option>
    {data.map((option) => (
      <option key={option.id} value={option.id} className="custom-option">
        {option.name}
      </option>
    ))}
  </Container>
)
