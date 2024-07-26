import type * as Stitches from '@stitches/react'
import { type ButtonHTMLAttributes, type FC } from 'react'
import { ButtonModel } from './styles'

export type StyledButtonVariants = Stitches.VariantProps<typeof ButtonModel>

export const IconBtn: FC<ButtonHTMLAttributes<HTMLButtonElement> & StyledButtonVariants> = ({ children, ...rest }) => (
  <ButtonModel type='button' {...rest}>
    {children}
  </ButtonModel>
)
