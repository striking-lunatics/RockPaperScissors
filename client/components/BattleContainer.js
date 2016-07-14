import React from 'react'

import Menu from './Menu'
import Player from './Player'
// opponent
import Mike from './Mike'
import Banner from './Banner'
import About from './About'

import * as Game from '../models/game'

export default class BattleContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      playerIcon: '',
      move: 'waiting'
    }
  }

  getIcon(move) {
    if (move === 'rock') {
      return '/images/rock.png';
    } else if (move === 'paper') {
      return '/images/paper.png';
    } else if (move === 'scissors') {
      return '/images/scissors.png'
    }
  }

  handleMove(move, e) {
    e.preventDefault();
    // on move, set icon graphic
    this.setState({playerIcon: this.getIcon(move)});
    // if move has not been made

    // Commented out if below for ease in testing/production
    // if (this.props.move === 'waiting') {
      // update move
      this.setState({move: move});
      // send move to db with lookup by userId
      Game.playerMove(move, sessionStorage.getItem('userId'));
    // }
  }

//------------------------Render------------------------//
//------------------------------------------------------//
  render() {
    return(
      <div>
        {/* placeholder props for round winners for testing */}
        <Banner 
          round1={'player'}
          round2={'opponent'}
          round3={''}
        />

        <div className="players container">
          {/* current player component */}
          <Player
            handleMove={this.handleMove.bind(this)}
            icon={this.state.playerIcon}
          />
          {/* opponent component */}
          <Mike
          />
        </div>

        {/* we should make About a modal */}

        { /* <About /> */ }

    </div>
    );
  }
}


