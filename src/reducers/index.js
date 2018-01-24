let initialState =  {
  lab: {
    seats: 0,
    share: 0,
  },
  con: {
    seats: 0,
    share: 0,
  },
  ld: {
    seats: 0,
    share: 0,
  },
  pc: {
    seats: 0,
    share: 0,
  },
  ukip: {
    seats: 0,
    share: 0,
  },
  grn: {
    seats: 0,
    share: 0,
  },
  snp: {
    seats: 0,
    share: 0,
  },
  ssp: {
    seats: 0,
    share: 0,
  },
  ikhh: {
    seats: 0,
    share: 0,
  },
  res: {
    seats: 0,
    share: 0,
  },
  sf: {
    seats: 0,
    share: 0,
  },
  sdlp: {
    seats: 0,
    share: 0,
  },
  dup: {
    seats: 0,
    share: 0,
  },
  uup: {
    seats: 0,
    share: 0,
  },
  wp: {
    seats: 0,
    share: 0,
  },
  vfy: {
    seats: 0,
    share: 0,
  },
  ind: {
    seats: 0,
    share: 0,
  },
  oth: {
    seats: 0,
    share: 0,
  },
  topThreeParties: [{name: '', seats: 0}, {name: '', seats: 0}, {name: '', seats: 0}, 0]
};

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

const storeSeats = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case 'ADD_SEAT':
      switch(action.partyCode) {
        case 'lab': 
          newState = Object.assign({}, state, {lab: { seats: state.lab.seats + 1, share:0 }})
          return newState;
        case 'pc': 
          newState = Object.assign({}, state, {pc: { seats: state.pc.seats + 1, share:0 }})
          return newState;
        case 'con': 
          newState = Object.assign({}, state, {con: { seats: state.con.seats + 1, share:0 }})
          return newState;
        case 'ld': 
          newState = Object.assign({}, state, {ld: { seats: state.ld.seats + 1, share:0 }})
          return newState;
        case 'ukip': 
          newState = Object.assign({}, state, {ukip: { seats: state.ukip.seats + 1, share:0 }})
          return newState;
        case 'grn': 
          newState = Object.assign({}, state, {grn: { seats: state.grn.seats + 1, share:0 }})
          return newState;
        case 'snp': 
          newState = Object.assign({}, state, {snp: { seats: state.snp.seats + 1, share:0 }})
          return newState;
        case 'ssp': 
          newState = Object.assign({}, state, {ssp: { seats: state.ssp.seats + 1, share:0 }})
          return newState;
        case 'ikhh': 
          newState = Object.assign({}, state, {ikhh: { seats: state.ikhh.seats + 1, share:0 }})
          return newState;
        case 'res': 
          newState = Object.assign({}, state, {res: { seats: state.res.seats + 1, share:0 }})
          return newState;
        case 'sf': 
          newState = Object.assign({}, state, {sf: { seats: state.sf.seats + 1, share:0 }})
          return newState;
        case 'sdlp': 
          newState = Object.assign({}, state, {sdlp: { seats: state.sdlp.seats + 1, share:0 }})
          return newState;
        case 'dup': 
          newState = Object.assign({}, state, {dup: { seats: state.dup.seats + 1, share:0 }})
          return newState;
        case 'uup': 
          newState = Object.assign({}, state, {uup: { seats: state.uup.seats + 1, share:0 }})
          return newState;
        case 'wp': 
          newState = Object.assign({}, state, {wp: { seats: state.wp.seats + 1, share:0 }})
          return newState;
        case 'vfy': 
          newState = Object.assign({}, state, {vfy: { seats: state.vfy.seats + 1, share:0 }})
          return newState;
        case 'ind': 
          newState = Object.assign({}, state, {ind: { seats: state.ind.seats + 1, share:0 }})
          return newState;
        case 'oth': 
          newState = Object.assign({}, state, {oth: { seats: state.oth.seats + 1, share:0 }})
          return newState;
      }

    case 'PARTY_SHARE':
      newState = Object.assign({}, state, {lab: { seats: state.lab.seats, share: precisionRound((state.lab.seats/650)*100, 2) }},
          {pc: { seats: state.pc.seats, share: precisionRound((state.pc.seats/650)*100, 2) }},
          {con: { seats: state.con.seats, share: precisionRound((state.con.seats/650)*100, 2) }},
          {ld: { seats: state.ld.seats, share: precisionRound((state.ld.seats/650)*100, 2) }},
          {ukip: { seats: state.ukip.seats, share: precisionRound((state.ukip.seats/650)*100, 2) }},
          {grn: { seats: state.grn.seats, share: precisionRound((state.grn.seats/650)*100, 2) }},
          {snp: { seats: state.snp.seats, share: precisionRound((state.snp.seats/650)*100, 2) }},
          {ssp: { seats: state.ssp.seats, share: precisionRound((state.ssp.seats/650)*100, 2) }},
          {ikhh: { seats: state.ikhh.seats, share: precisionRound((state.ikhh.seats/650)*100, 2) }},
          {res: { seats: state.res.seats, share: precisionRound((state.res.seats/650)*100, 2) }},
          {sf: { seats: state.sf.seats, share: precisionRound((state.sf.seats/650)*100, 2) }},
          {sdlp: { seats: state.sdlp.seats, share: precisionRound((state.sdlp.seats/650)*100, 2) }},
          {dup: { seats: state.dup.seats, share: precisionRound((state.dup.seats/650)*100, 2) }},
          {uup: { seats: state.uup.seats, share: precisionRound((state.uup.seats/650)*100, 2) }},
          {wp: { seats: state.wp.seats, share: precisionRound((state.wp.seats/650)*100, 2) }},
          {vfy: { seats: state.vfy.seats, share: precisionRound((state.vfy.seats/650)*100, 2) }},
          {ind: { seats: state.ind.seats, share: precisionRound((state.ind.seats/650)*100, 2) }},
          {oth: { seats: state.oth.seats, share: precisionRound((state.oth.seats/650)*100, 2) }})
      return newState;

      case 'FIND_TOP_THREE': 
        let partySeats = [state.lab.seats, state.pc.seats, state.con.seats, state.ld.seats, state.ukip.seats,
          state.grn.seats, state.snp.seats, state.ssp.seats, state.ikhh.seats, state.res.seats, state.sf.seats,
          state.sdlp.seats, state.dup.seats, state.uup.seats, state.wp.seats, state.vfy.seats, state.ind.seats, state.oth.seats];
        partySeats.sort(function(a, b){return b-a});
        let others = 0;
        partySeats.forEach((elem, index)=> {
           if(index >= 3) {
             others += elem;
           }
        })

        var parties = [
          {name: 'lab', seats: state.lab.seats},
          {name: 'con', seats: state.con.seats},
          {name: 'ld', seats: state.ld.seats},
          {name: 'pc', seats: state.pc.seats},
          {name: 'ukip', seats: state.ukip.seats},
          {name: 'grn', seats: state.grn.seats},
          {name: 'snp', seats: state.snp.seats},
          {name: 'ssp', seats: state.ssp.seats},
          {name: 'ikhh', seats: state.ikhh.seats},  
          {name: 'res', seats: state.res.seats},   
          {name: 'sf', seats: state.sf.seats}, 
          {name: 'sdlp', seats: state.sdlp.seats}, 
          {name: 'dup', seats: state.dup.seats}, 
          {name: 'uup', seats: state.uup.seats}, 
          {name: 'wp', seats: state.wp.seats}, 
          {name: 'vfy', seats: state.vfy.seats}, 
          {name: 'ind', seats: state.ind.seats},                       
          {name: 'oth', seats: state.oth.seats},                       
        ]

        let retArr = [ parties.find(function(party) { return party.seats === partySeats[0]; }),
          parties.find(function(party) { return party.seats === partySeats[1]; }),
          parties.find(function(party) { return party.seats === partySeats[2]; }),
          others
        ];

        newState = Object.assign({}, state, {topThreeParties: retArr});
        return newState;

      default:
        return state;
    }
  }
  
  export default storeSeats;