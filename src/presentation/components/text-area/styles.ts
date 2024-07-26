import { styled } from '~/stitches.config'

export const Container = styled('textarea', {
  width: '100%',

  '&.with-error': { border: '2px solid $red9', },
})