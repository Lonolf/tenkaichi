import { createMuiTheme } from '@material-ui/core'
import { commonOverrides } from './common-overrides'
import { commonComponentsProps } from './common-components-props'
import { commonShape } from './common-shape'
import { palette } from './palette'

export const mobileTheme = createMuiTheme({
  overrides: {
    ...commonOverrides,
  },
  props: {
    ...commonComponentsProps,
  },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: 36,
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
  },
  shape: commonShape,
  palette,
})
