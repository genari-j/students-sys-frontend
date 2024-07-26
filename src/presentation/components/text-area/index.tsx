import type * as Stitches from '@stitches/react'
import { TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Container } from './styles'

export type StyledTexareaVariants = Stitches.VariantProps<typeof Container>

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn
  label: string
  placeholder?: string
  error?: boolean
}

export type CombinedTextareaProps = TextareaProps & StyledTexareaVariants

export const Textarea = ({ register, label, placeholder, error, ...rest }: CombinedTextareaProps) => (
  <div>
    <textarea
      aria-label={label}
      name={register.name}
      ref={register.ref}
      onChange={register.onChange}
      placeholder={placeholder}
      className={error && error === true ? 'with-error' : ''}
      {...(error && { error: 'true' })}
      {...rest}
    >
    </textarea>
  </div>
)
