export const addSeat = partyCode => {
  return {
    type: 'ADD_SEAT',
    partyCode
  }
}

export const setPartyShare = () => {
  return {
    type: 'PARTY_SHARE',
  }
}

export const findTopThreeParties = () => {
  return {
    type: 'FIND_TOP_THREE',
  }
}
