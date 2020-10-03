const navigationChangeNavigation = ({ state }, values) => {
  try {
    state.navigation = {
      ...state.navigation,
      ...values,
    }
  } catch (error) {
    console.error(error)
  }
}

export default {
  navigationChangeNavigation,
}
