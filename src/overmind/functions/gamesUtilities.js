export const checkOrder = pairs => {
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

export const getContendersPairs = contenders =>
  contenders.reduce((list, conA) => {
    contenders.forEach(conB => {
      if (!(conA === conB || list.some(con => isSamePair(con, [conA, conB]))))
        list.push([conA, conB])
    })
    return list
  }, [])

export const isSamePair = (pairA, pairB) =>
  (pairA[0] === pairB[0] && pairA[1] === pairB[1]) ||
    (pairA[0] === pairB[1] && pairA[1] === pairB[0])

const hasSamePlayer = (pairA, pairB) =>
  (pairA[0] === pairB[0] || pairA[0] === pairB[1] ||
    pairA[1] === pairB[0] || pairA[1] === pairB[1])
