import type * as Stitches from '@stitches/react'
import { type ImgHTMLAttributes } from 'react'
import { Container } from './styles'

export type StyledImageVariants = Stitches.VariantProps<typeof Container>

export type CombinedImgProps = ImgHTMLAttributes<HTMLImageElement> & StyledImageVariants

export const Image = ({ ...rest }: CombinedImgProps) => <Container {...rest} />