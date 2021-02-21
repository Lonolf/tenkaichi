import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { useIsMobile } from 'hooks/useIsMobile'
import React from 'react'
import { theme } from 'theme'

const ThemeSelector = ({ children }) => {
  const mobile = useIsMobile()
  const currenttheme = mobile ? theme.mobileTheme : theme.desktopTheme

  return (
    <MuiThemeProvider theme={currenttheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeSelector
