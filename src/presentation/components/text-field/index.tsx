import type * as Stitches from '@stitches/react'
import { type ReactNode, InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Container, InputModel, Icon } from './styles'

export type StyledInputVariants = Stitches.VariantProps<typeof Container>

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
  label: string
  placeholder?: string
  error?: boolean
  type: string
  children?: ReactNode
}

export type CombinedTextFieldProps = TextFieldProps & StyledInputVariants

export const TextField = ({ type, register, label, placeholder, error, children, ...rest }: CombinedTextFieldProps) => (
  <Container>
    <InputModel
      type={type}
      aria-label={label}
      name={register?.name}
      ref={register?.ref}
      onChange={register?.onChange}
      placeholder={placeholder}
      className={error && error === true ? 'with-error' : '' || children ? 'with-icon' : ''}
      {...(error && { error: 'true' } )}
      {...rest}
    />
    {children ? <Icon>{children}</Icon> : null}
  </Container>
)
