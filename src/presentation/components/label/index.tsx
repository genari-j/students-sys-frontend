import type * as Stitches from '@stitches/react'
import { type ReactNode, LabelHTMLAttributes } from 'react'
import { Container } from './styles'

export type StyledLabelVariants = Stitches.VariantProps<typeof Container>

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode
}

export type CombinedLabelProps = LabelProps & StyledLabelVariants

export const Label = ({ children, ...rest }: CombinedLabelProps) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}
