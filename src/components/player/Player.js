import React from 'react';
import './Player.css'

const Player = (props) => (
    <li className='Player'>
        <input className='Player__name' onChange={() => props.changePlayerName(EventTarget)} value={props.name} ></input>
        <span className='Player__score'>{props.score}</span>
        <span className='Player__button' onClick={() => props.onPlayerScoreChange(1)} >+</span>
        <span className='Player__button' onClick={() => props.onPlayerScoreChange(-1)} >-</span>
        <span className='Player__button' onClick={() => props.onPlayerRemove()} >Delete</span>
    </li>
)

export default Player;