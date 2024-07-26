import { styled, keyframes } from '~/stitches.config'

const spinnerBounce = keyframes({
  from: { transform: 'scale(1.25)' },
  to: { transform: 'translateY(-15px) scaleX(1)' }
})

export const Container = styled('div', {
  display: 'inline-block',

  span: {
    display: 'inline-block',
    width: 10,
    height: 10,
    marginInline: 8,
    borderRadius: '50%',
    animation: `${spinnerBounce.toString()} 400ms alternate infinite`,

    '&:nth-child(2)': { animationDelay: '150ms' },
    '&:nth-child(3)': { animationDelay: '300ms' }
  }
})
