import { createStitches } from '@stitches/react'
import { colors, devices } from '~/presentation/themes/config'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors
  },

  media: devices,

  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: number | string) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
})
