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
  contendersSelector_easterEgg_subtitle: 'Iron Bucket torna al lavoro!',
  contendersSelector_name_label: 'Nome del contendente',
}

const game = {
  game_title: 'Partita',
  game_gameFinished_warning: 'Partita terminata',
  game_lastGame_warning: 'Ultima partita',
}

const results = {
  results_title: 'Risultati',
  gamesResults_title: 'Games',
}

const rulesSelector = {
  rulesSelector_title_label: 'Regolamento',
  rulesSelector_close_button: 'Chiudi',
  rulesSelector_doubleDeath_label: 'Abilita doppia morte',
  rulesSelector_doubleDeath_explanation: 'Se entrambi i giocatori superano il punteggio minimo, il match non ha un vincitore',
  rulesSelector_pointsToWin_label: 'Punteggio per vincere il match: ',
  rulesSelector_pointsForVictory_label: 'Punteggio per ogni vittoria: ',
  rulesSelector_matches_label: 'Match per partita: ',
  rulesSelector_maxAdmonitions_label: 'Ammonizione massime: ',
  rulesSelector_ruleset_label: 'Regolamento',
}

const contendersList = {
  contendersList_name_label: 'Nome',
  contendersList_points_label: 'Punti',
  contendersList_disparity_label: 'Disparità',
  contendersList_hitsScored_label: 'Fatti',
  contendersList_hitsSuffered_label: 'Subiti',
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

const scoreCard = {
  scoreline_score_label: 'Punteggio: ',
}

const settingsSelector = {
  settingsSelector_title_label: 'Impostazioni',
  settingsSelector_swordAcademy_label: 'Sword Academy',
  settingsSelector_actionsButton_label: 'Bottone azioni',
  settingsSelector_close_button: 'Chiudi',
}

const footer = {
  footer_betaWarning: 'ATTENZIONE: versione Beta non stabile',
  matchTimer_time_label: 'Tempo: ',
  matchTimer_ready_label: 'Pronto',
  matchTimer_ongoing_label: 'In corso',
  matchTimer_paused_label: 'In pausa',
  matchTimer_finished_label: 'Completato',
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
  ...contendersList,
  ...contenderDetails,
  ...scoreCard,
  ...settingsSelector,
  ...footer,
}
