import { Overrides } from '@material-ui/core/styles/overrides'

export const commonOverrides: Overrides = {
  MuiButton: {
    containedPrimary: {
      background: 'linear-gradient(45deg, #4791db 30%, #64b5f6 90%)',
      color: '#fff',
      boxShadow: '0 3px 5px 2px rgba(105, 206, 255, 0.3)',
    },
  },
  MuiFab: {
    primary: {
      background: 'linear-gradient(45deg, #4791db 30%, #64b5f6 90%)',
      color: '#fff',
      boxShadow: '0 3px 5px 2px rgba(105, 206, 255, 0.3)',
    },
  },
  MuiDivider: {
    vertical: {
      marginBottom: 24,
      marginTop: 24,
    },
  },
  MuiFormLabel: {
    root: {
      fontSize: 12,
      padding: '2px 10px',
    },
  },
  MuiInputLabel: {
    outlined: {
      transform: 'translate(8px, 8px) scale(1)',
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: '8px 16px',
    },
  },
  MuiSelect: {
    outlined: {
      padding: '8px 16px',
    },
  },
}
