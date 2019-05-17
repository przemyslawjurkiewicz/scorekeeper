import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/playerList/PlayerList';
import AddPlayer from './components/addPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    }
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }
  
  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }


  render() {
    return (
      <div className='App'>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayerList players={this.state.players} onScoreUpdate={this.onScoreUpdate} />
      </div>
    );
  }

}

export default App;
