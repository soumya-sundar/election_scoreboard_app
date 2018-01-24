import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSeat, setPartyShare, findTopThreeParties } from '../actions';
import {bindActionCreators} from 'redux';

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.array.isRequired,
        lab: PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        con:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        ld:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        pc:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        ukip:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        grn:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        snp:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        ssp:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        ikhh:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        res:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        sf:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        sdlp:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        dup:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        uup:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        wp:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        vfy:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        ind:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        oth:  PropTypes.shape({
          seats: PropTypes.number,
          share: PropTypes.number,
        }),
        topThreeParties: PropTypes.array,
        addSeat: PropTypes.func,
        setPartyShare: PropTypes.func,
        findTopThreeParties: PropTypes.func,
    }

    static defaultProps = {
      lab: {
        seats: 0,
        share: 0,
      },
      pc: {
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
      topThreeParties: [{name: '', seats: 0}, {name: '', seats: 0}, {name: '', seats: 0}, 0],
      addSeat: () => {},
      setPartyShare: () => {}
    }

    constructor(props){
        super(props);
        this.state = {
          clicked: false
        }
    }

    process = () => {
      //console.log(this.props.initialData);
      if(this.props.initialData.length> 0) {
        this.setState({clicked: true});
        for(let i=0; i < 650; i++){
           var votes = [];
           var parties = [
             {name: 'lab', votes: 0},
             {name: 'con', votes: 0},
             {name: 'ld', votes: 0},
             {name: 'pc', votes: 0},
             {name: 'ukip', votes: 0},
             {name: 'grn', votes: 0},
             {name: 'snp', votes: 0},
             {name: 'ssp', votes: 0},
             {name: 'ikhh', votes: 0},  
             {name: 'res', votes: 0},   
             {name: 'sf', votes: 0}, 
             {name: 'sdlp', votes: 0}, 
             {name: 'dup', votes: 0}, 
             {name: 'uup', votes: 0}, 
             {name: 'wp', votes: 0}, 
             {name: 'vfy', votes: 0}, 
             {name: 'ind', votes: 0},                       
             {name: 'oth', votes: 0},                       
           ]
           var constituency = this.props.initialData[i].results[0].result;
           var party_with_highest_vote = {};
           constituency.forEach((party) => {
               let party_vote = 0;
               if(party.votes) {
                party_vote = parseInt(party.votes[0]);
                votes.push(party_vote);
               }      
               var expr = party.partyCode[0];
               switch(expr) {
                 case 'LAB ': 
                   parties[0].votes = party_vote
                   break;
                 case 'CON ': 
                   parties[1].votes = party_vote
                   break;
                 case 'LD  ': 
                   parties[2].votes = party_vote
                   break;
                 case 'PC  ': 
                   parties[3].votes = party_vote
                   break;
                 case 'UKIP': 
                   parties[4].votes = party_vote
                   break;
                 case 'GRN ': 
                   parties[5].votes = party_vote
                   break;
                 case 'SNP ' : 
                   parties[6].votes = party_vote
                   break;
                 case 'SSP ' : 
                   parties[7].votes = party_vote
                   break;
                 case 'IKHH' : 
                   parties[8].votes = party_vote
                   break;
                 case 'RES' : 
                   parties[9].votes = party_vote
                   break;
                 case 'SF  ' : 
                   parties[10].votes = party_vote
                   break;
                 case 'SDLP' : 
                   parties[11].votes = party_vote
                   break;
                 case 'DUP ' : 
                   parties[12].votes = party_vote
                   break;
                 case 'UUP ' : 
                   parties[13].votes = party_vote
                   break;
                 case 'WP  ' : 
                   parties[14].votes = party_vote
                   break;
                 case 'VFY ' : 
                   parties[15].votes = party_vote
                   break;
                 case 'IND' : 
                   parties[16].votes = party_vote
                   break;
                 case 'OTH' : 
                   parties[17].votes = party_vote
                   break;
               }
               let highestVote = Math.max(...votes);       
               party_with_highest_vote = parties.find(function(party) {
                  return party.votes === highestVote; 
               });
           })
           this.props.addSeat(party_with_highest_vote.name);
       }
       this.props.setPartyShare();
       this.props.findTopThreeParties();
      } else {
        alert("Mongo DB Collection named 'Constituency' is not available. Please run 'npm run loadDB'.");
      }
    }

    render = () => {
      var style = {
        table: {
          border: '1px solid black',
          borderCollapse: 'collapse',
          width: '100%',
        },
        th: {
          border: '1px solid black',
          borderCollapse: 'collapse',
          paddingLeft: '5px',
          textAlign: 'left'
        },
        th2: {
          border: '1px solid black',
          borderCollapse: 'collapse',
          padding: '5px',
          textAlign: 'left'
        },
        td : {
          border: '1px solid black',
          borderCollapse: 'collapse',
          paddingLeft: '5px',
        },
        td2 : {
          border: '1px solid black',
          borderCollapse: 'collapse',
          padding: '5px',
        }
      }
       
      let highlightRow = {};
      if(this.props.topThreeParties[0].seats > 326) {
        highlightRow = { backgroundColor: 'yellow'};
      }

      let image = !this.state.clicked ? (
        <img src={'start.png'} 
          onClick={this.process} 
          style={{width:'64px', height:'64px', cursor: 'pointer', disabled: 'true'} } 
        />)
        : null;


      let displayTopThreeTotals = this.state.clicked ? (
        <table style={style.table}>
        <caption> <b>Top three parties</b></caption>
        <tbody>
          <tr>
            <th style={style.th2}>Party Code</th>
            <th style={style.th2}>No. of seats</th> 
          </tr>
          <tr style={highlightRow}>
            <td style={style.td2}>{this.props.topThreeParties[0].name}</td>
            <td style={style.td2}>{this.props.topThreeParties[0].seats}</td>
          </tr>
          <tr>
          <td style={style.td2}>{this.props.topThreeParties[1].name}</td>
          <td style={style.td2}>{this.props.topThreeParties[1].seats}</td>
          </tr>
          <tr>
          <td style={style.td2}>{this.props.topThreeParties[2].name}</td>
          <td style={style.td2}>{this.props.topThreeParties[2].seats}</td>
          </tr>
          <tr>
            <td style={style.td2}>Others</td>
            <td style={style.td2}>{this.props.topThreeParties[3]}</td>
          </tr>
        </tbody>
      </table>
      ): null;

      let result = this.state.clicked ? (
        this.props.topThreeParties[0].seats >= 326 ? 
          (<text><b>{ 'Party '+ '['+ this.props.topThreeParties[0].name + '] ' + 'won with absolute majority.'}</b></text>)
        : (<text><b>{'Party '+ '['+ this.props.topThreeParties[0].name + '] ' +  'won with highest number of seats'}</b></text>)
      ): null;

      return(
        <div className="App" >
          <h2 style={{textAlign: 'center'}}> UK Election Scoreboard Application</h2>
          <div style={{display:'flex', flexDirection:'row', paddingLeft: '54px'}}>
          <div style={{display:'flex', flexDirection:'column', width: '40%', paddingTop: '42px'}}>
          <table style={style.table}>
            <caption> <b>Scoreboard</b></caption>
            <tbody>
              <tr>
                <th style={style.th}>Party Name</th>
                <th style={style.th}>Share of vote</th> 
                <th style={style.th}>Seats won</th>
              </tr>
              <tr>
                <td style={style.td}>Labour</td>
                <td style={style.td}>{this.props.lab.share + '%'}</td> 
                <td style={style.td}>{this.props.lab.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Conservative</td>
                <td style={style.td}>{this.props.con.share + '%'}</td> 
                <td style={style.td}>{this.props.con.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Liberal Democrats</td>
                <td style={style.td}>{this.props.ld.share + '%'}</td> 
                <td style={style.td}>{this.props.ld.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Plaid Cymru</td>
                <td style={style.td}>{this.props.pc.share + '%'}</td> 
                <td style={style.td}>{this.props.pc.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>UK Independence Party</td>
                <td style={style.td}>{this.props.ukip.share + '%'}</td> 
                <td style={style.td}>{this.props.ukip.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Green Party</td>
                <td style={style.td}>{this.props.grn.share + '%'}</td> 
                <td style={style.td}>{this.props.grn.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Scottish National Party</td>
                <td style={style.td}>{this.props.snp.share + '%'}</td> 
                <td style={style.td}>{this.props.snp.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Scottish Socialist Party</td>
                <td style={style.td}>{this.props.ssp.share + '%'}</td> 
                <td style={style.td}>{this.props.ssp.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Independent Kidderminster Hospital and Health Concern</td>
                <td style={style.td}>{this.props.ikhh.share + '%'}</td> 
                <td style={style.td}>{this.props.ikhh.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Respect-Unity Coalition </td>
                <td style={style.td}>{this.props.res.share + '%'}</td> 
                <td style={style.td}>{this.props.res.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Sinn Féin </td>
                <td style={style.td}>{this.props.sf.share + '%'}</td> 
                <td style={style.td}>{this.props.sf.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Social Democratic and Labour Party </td>
                <td style={style.td}>{this.props.sdlp.share + '%'}</td> 
                <td style={style.td}>{this.props.sdlp.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Democratic Unionist Party </td>
                <td style={style.td}>{this.props.dup.share + '%'}</td> 
                <td style={style.td}>{this.props.dup.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Ulster Unionist Party </td>
                <td style={style.td}>{this.props.uup.share + '%'}</td> 
                <td style={style.td}>{this.props.uup.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Workers' Party </td>
                <td style={style.td}>{this.props.wp.share + '%'}</td> 
                <td style={style.td}>{this.props.wp.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> VFY </td>
                <td style={style.td}>{this.props.vfy.share + '%'}</td> 
                <td style={style.td}>{this.props.vfy.seats}</td>
              </tr>
              <tr>
                <td style={style.td}> Independent Party </td>
                <td style={style.td}>{this.props.ind.share + '%'}</td> 
                <td style={style.td}>{this.props.ind.seats}</td>
              </tr>
              <tr>
                <td style={style.td}>Others</td>
                <td style={style.td}>{this.props.oth.share + '%'}</td> 
                <td style={style.td}>{this.props.oth.seats}</td>
              </tr>
            </tbody>
          </table> 
          </div>
          <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', padding: '20px'}}>
            {image}
          </div>
          <div style={{display:'flex', flexDirection:'column', padding: '42px'}}>
           {displayTopThreeTotals}
           <div style={{paddingTop: '21px'}}>{result}</div>
          </div>
          </div>    
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    lab: state.lab,
    pc: state.pc,
    con: state.con,
    ld: state.ld,
    ukip: state.ukip,
    grn: state.grn,
    snp: state.snp,
    ssp: state.ssp,
    ikhh: state.ikhh,
    res: state.res,
    sf: state.sf,
    sdlp: state.sdlp,
    dup: state.dup,
    uup: state.uup,
    wp: state.wp,
    vfy: state.vfy,
    ind: state.ind,
    oth: state.oth,
    topThreeParties: state.topThreeParties
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSeat : bindActionCreators(addSeat, dispatch),
    setPartyShare: bindActionCreators(setPartyShare, dispatch),
    findTopThreeParties: bindActionCreators(findTopThreeParties, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);