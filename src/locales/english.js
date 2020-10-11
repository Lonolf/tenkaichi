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
  contendersSelector_title: 'Contenders',
  contendersSelector_easterEgg_subtitle: 'Iron Bucket go back to work!',
  contendersSelector_name_label: 'Name of contender',
}

const game = {
  game_title: 'Game',
  game_gameFinished_warning: 'Finished game',
  game_lastGame_warning: 'Last game',
}

const results = {
  results_title: 'Results',
  gamesResults_title: 'Games',
}

const rulesSelector = {
  rulesSelector_title_label: 'Rules',
  rulesSelector_close_button: 'Close',
  rulesSelector_doubleDeath_label: 'Double death',
  rulesSelector_pointsToWin_label: 'Minimal score: ',
  rulesSelector_pointsForVictory_label: 'Points for victory: ',
  rulesSelector_matches_label: 'Matches per game: ',
  rulesSelector_maxAdmonitions_label: 'Max admonitions: ',
  rulesSelector_ruleset_label: 'Ruleset',
}

const contendersList = {
  contendersList_name_label: 'Name',
  contendersList_points_label: 'Points',
  contendersList_disparity_label: 'Disparity',
  contendersList_hitsScored_label: 'Score',
  contendersList_hitsSuffered_label: 'Suffered',
}

const contenderDetails = {
  contenderDetails_name_label: 'Name: ',
  contenderDetails_points_label: 'Total points: ',
  contenderDetails_disparity_label: 'Disparity: ',
  contenderDetails_hitsScored_label: 'Hits scored: ',
  contenderDetails_hitsSuffered_label: 'Hits suffered: ',
  contenderDetails_gamesWin_label: 'Games win: ',
  contenderDetails_gamesLost_label: 'Games lost: ',
  contenderDetails_matchesWin_label: 'Matches win: ',
  contenderDetails_matchesLost_label: 'Matches lost: ',
}

const scoreCard = {
  scoreline_score_label: 'Score: ',
}

const settingsSelector = {
  settingsSelector_title_label: 'Settings',
  settingsSelector_swordAcademy_label: 'Sword Academy',
  settingsSelector_actionsButton_label: 'Actions button',
  settingsSelector_close_button: 'Close',
}

const footer = {
  footer_betaWarning: 'WARNING: beta version, not stable',
  matchTimer_time_label: 'Time: ',
  matchTimer_ready_label: 'Ready',
  matchTimer_ongoing_label: 'Ongoing',
  matchTimer_paused_label: 'Paused',
  matchTimer_finished_label: 'Completed',
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
  ...contendersList,
  ...contenderDetails,
  ...scoreCard,
  ...settingsSelector,
  ...footer,
}
