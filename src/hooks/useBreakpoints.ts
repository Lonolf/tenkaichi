import { useMediaQuery } from '@material-ui/core'

export interface BreakpointsDictionary {
  /**
   * '(min-width: 0px)'
   */
  xs: boolean;
  /**
   * '(min-width: 600px)'
   */
  sm: boolean;
  /**
   * '(min-width: 960px)'
   */
  md: boolean;
  /**
   * '(min-width: 1280px)'
   */
  lg: boolean;
  /**
   * '(min-width: 1920px)'
   */
  xl: boolean;
}

export const useBreakpoints = (): BreakpointsDictionary => {
  const xs = useMediaQuery('(min-width: 0px)')
  const sm = useMediaQuery('(min-width: 600px)')
  const md = useMediaQuery('(min-width: 960px)')
  const lg = useMediaQuery('(min-width: 1280px)')
  const xl = useMediaQuery('(min-width: 1920px)')

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  }
}
