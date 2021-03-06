import React from 'react';
import Player from '../player/Player';
import './PlayerList.css';

const PlayerList = props => (
  <ul className='PlayerList'>
    {props.players.map((player, i) => (
      <Player
        key={i}
        name={player.name}
        score={player.score}
        onPlayerScoreChange={points => props.onScoreUpdate(i, points)}
        onPlayerRemove={() => props.onPlayerRemove(i)}
        changePlayerName={target => props.changePlayerName(i, target)}
      />
    ))}
  </ul>
);

export default PlayerList;
