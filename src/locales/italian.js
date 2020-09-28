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
  rulesSelector_title: 'Selezione regolamento',
}

const game = {
  game_title: 'Game',
  game_gameFinished_warning: 'Game terminato',
  game_lastGame_warning: 'Ultimo game',
}

const results = {
  results_title: 'Risultati',
  gamesResults_title: 'Games',
}

const rulesSelector = {
  rulesSelector_title_label: 'Regolamento',
  rulesSelector_close_button: 'Chiudi',
  rulesSelector_doubleDeath_label: 'Doppia morte',
  rulesSelector_pointsToWin_label: 'Punteggio minimo: ',
  rulesSelector_pointsForVictory_label: 'Punteggio per ogni vittoria: ',
  rulesSelector_matches_label: 'Match per partita: ',
  rulesSelector_maxAdmonitions_label: 'Ammonizione massime: ',
}

const contenderDetails = {
  contenderDetails_name_label: 'Nome: ',
  contenderDetails_points_label: 'Punti totale: ',
  contenderDetails_disparity_label: 'Disparità: ',
  contenderDetails_hitsScored_label: 'Colpi fatti: ',
  contenderDetails_hitsSuffered_label: 'Colpi subiti: ',
  contenderDetails_gamesWin_label: 'Partite vinte: ',
  contenderDetails_gamesLost_label: 'Partite perse: ',
  contenderDetails_matchesWin_label: 'Match vinti: ',
  contenderDetails_matchesLost_label: 'Match persi: ',
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
  ...rulesSelector,
  ...contenderDetails,
}
