const navigationChangeNavigation = ({ state }, values) => {
  state.navigation = {
    ...state.navigation,
    ...values,
  }
}

export default {
  navigationChangeNavigation,
}
