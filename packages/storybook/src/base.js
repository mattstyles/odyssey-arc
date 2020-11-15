
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Reset } from '@raid-ui/reset'

import { theme as core } from '@arc/theme'

export const Base = ({
  theme,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      {children}
    </ThemeProvider>
  )
}
Base.defaultProps = {
  theme: core
}
