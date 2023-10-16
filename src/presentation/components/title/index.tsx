import type * as Stitches from '@stitches/react'
import { type ReactNode } from 'react'
import { Container } from './styles'

export type StyledTitleVariants = Stitches.VariantProps<typeof Container>

interface TitleProps extends StyledTitleVariants {
  children?: ReactNode
}

export const Title = ({ children, ...rest }: TitleProps) => (
  <Container {...rest}>
    {children}
  </Container>
)
