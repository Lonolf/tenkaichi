import { createMuiTheme } from '@material-ui/core'
import { commonOverrides } from './common-overrides'
import { commonShape } from './common-shape'
import { commonComponentsProps } from './common-components-props'
import { palette } from './palette'

export const desktopTheme = createMuiTheme({
  overrides: {
    ...commonOverrides,
  },
  props: {
    ...commonComponentsProps,
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: commonShape,
  palette,
})
