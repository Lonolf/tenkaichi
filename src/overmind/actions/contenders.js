import { history } from 'index'

const contendersCreateContenders = ({ state }, { contenders }) => {
  try {
    const filteredContenders = contenders.filter(contender => contender.name !== '')

    state.contenders = filteredContenders
      .reduce((list, contender) => ({ ...list, [contender.name]: contender }), {})

    gamesCreateGames({ state, filteredContenders })
  } catch (error) {
    console.error(error)
  }
}

const gamesCreateGames = ({ state, filteredContenders }) => {
  const contenders = filteredContenders.map(contender => contender.name)

  //   const contenders = ['a', 'b', 'c', 'd', 'e', 'f']
  const contendersPairs = checkOrder((getContendersPairs(contenders)))

  state.games = contendersPairs.reduce((list, pair, index) => ({
    ...list,
    [index + 1]: { conA: pair[0], conB: pair[1], scoreConA: 0, scoreConB: 0, finished: false },
  }), {})
  history.push('/game/1')
}

const getContendersPairs = contenders =>
  contenders.reduce((list, conA) => {
    contenders.forEach(conB => {
      if (!(conA === conB || list.some(con => isSamePair(con, [conA, conB]))))
        list.push([conA, conB])
    })
    return list
  }, [])

const checkOrder = pairs => {
  const unusedPairs = JSON.parse(JSON.stringify(pairs))
  const response = [unusedPairs[0]]
  unusedPairs.splice(0, 1)

  while (unusedPairs.length > 0) {
    let foundPair = false
    for (let pair of unusedPairs)
      if (!hasSamePlayer(pair, response[response.length - 1])) {
        response.push(pair)
        unusedPairs.splice(unusedPairs.indexOf(pair), 1)
        foundPair = true
      }

    if (!foundPair) {
      response.push(unusedPairs[0])
      unusedPairs.splice(0, 1)
    }
  }
  return response
}

const isSamePair = (pairA, pairB) =>
  (pairA[0] === pairB[0] && pairA[1] === pairB[1]) ||
  (pairA[0] === pairB[1] && pairA[1] === pairB[0])

const hasSamePlayer = (pairA, pairB) =>
  (pairA[0] === pairB[0] || pairA[0] === pairB[1] ||
  pairA[1] === pairB[0] || pairA[1] === pairB[1])

export default {
  contendersCreateContenders,
}
