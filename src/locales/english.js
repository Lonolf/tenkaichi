const error = {
  error_reload_button: 'Reload page',
  error_passedDownError_proposed_action: 'Proposed action',
  error_passedDownError_text: 'This was not in our plans!',
  error_passedDownError_title: 'Oops... ^^"',
}

const months = {
  month01: 'January',
  month02: 'February',
  month03: 'March',
  month04: 'April',
  month05: 'May',
  month06: 'June',
  month07: 'July',
  month08: 'August',
  month09: 'September',
  month10: 'October',
  month11: 'November',
  month12: 'December',
}

const dates = {
  Sun: 'Dom',
  Mon: 'Lun',
  Tue: 'Mar',
  Wed: 'Mer',
  Thu: 'Gio',
  Fri: 'Ven',
  Sat: 'Sab',

  Jan: 'Gen',
  Feb: 'Feb',
  Mar: 'Mar',
  Apr: 'Apr',
  May: 'Mag',
  Jun: 'Giu',
  Jul: 'Lug',
  Aug: 'Ago',
  Sep: 'Set',
  Oct: 'Ott',
  Nov: 'Nov',
  Dec: 'Dic',
}

const toPrice = price => {
  return String(price.toFixed(2))
}

const contendersSelector = {
  contendersSelector_title: 'Contendenti',
  contendersSelector_name_label: 'Nome del contendente',
}

const game = {
  game_title: 'Game',
  game_gameFinished_warning: 'Game terminato',
}

const results = {
  results_title: 'Risultati',
  gamesResults_title: 'Round',
}

const rulesSelector = {
  rulesSelector_title_label: 'Rules',
  rulesSelector_close_button: 'Close',
  rulesSelector_doubleDeath_label: 'DoubleDeath',
  rulesSelector_pointsToWin_label: 'Min points to win',
  rulesSelector_pointsForVictory_label: 'Points for victory',
}

export const english = {
  locale: 'en',
  ...error,
  ...months,
  ...dates,
  toPrice,
  ...contendersSelector,
  ...game,
  ...results,
  ...rulesSelector,
}
