import { BreakpointsDictionary, useBreakpoints } from './useBreakpoints'

const ismobile = (breakpoints: BreakpointsDictionary) => !breakpoints.sm

export const useIsMobile = () => ismobile(useBreakpoints())
