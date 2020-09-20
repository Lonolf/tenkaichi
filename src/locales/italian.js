const error = {
  error_reload_button: 'Ricarica la pagina',
  error_passedDownError_proposed_action: 'Azione proposta',
  error_passedDownError_text: 'Questo non era previsto!',
  error_passedDownError_title: 'Oops... ^^"',
}

const months = {
  month01: 'Gennaio',
  month02: 'Febbraio',
  month03: 'Marzo',
  month04: 'Aprile',
  month05: 'Maggio',
  month06: 'Giugno',
  month07: 'Luglio',
  month08: 'Agosto',
  month09: 'Settembre',
  month10: 'Ottobre',
  month11: 'Novembre',
  month12: 'Dicembre',
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
  return String(price.toFixed(2)).replace('.', ',')
}

const contendersSelector = {
  contendersSelector_title: 'Contendenti',
  contendersSelector_name_label: 'Nome del contendente',
}

const game = {
  game_title: 'Game',
  game_gameFinished_warning: 'Game terminato',
}

const menuBar = {
  menuBar_title: 'Coding Salle',
  menuBar_codingSalle_button: 'Salle',
  menuBar_tankCombat_button: 'Tanks',
  menuBar_golem_button: 'Golem',
  menuBar_logout_button: 'logout',
  menuBar_drawer_title: 'Menu',
}

const results = {
  results_title: 'Risultati',
}

export const italian = {
  locale: 'it',
  ...error,
  ...months,
  ...dates,
  toPrice,
  ...contendersSelector,
  ...game,
  ...results,
  ...menuBar,
}
