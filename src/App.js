import React, { Component } from 'react';
import './App.css';
import PlayerList from './components/playerList/PlayerList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        },
        {
          name: 'Antoś',
          score: 0,
        },
        {
          name: 'Marian',
          score: 15,
        },
        {
          name: 'Zosia',
          score: 1,
        }
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <PlayerList players={this.state.players} />
      </div>
    );
  }

}

export default App;
