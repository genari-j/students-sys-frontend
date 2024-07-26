import { Container } from './styles'

interface SpinnerProps {
  bgColor?: string
}

export const Spinner = ({ bgColor } : SpinnerProps) => {
  return (
    <Container>
      <span style={{ background: bgColor ? bgColor : '#000000' }} ></span>
      <span style={{ background: bgColor ? bgColor : '#000000' }} ></span>
      <span style={{ background: bgColor ? bgColor : '#000000' }} ></span>
    </Container>
  )
}
