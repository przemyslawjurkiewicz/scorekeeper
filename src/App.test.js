import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayerList from './components/playerList/PlayerList'

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const players = [
    {
        name: 'Kunegunda',
        score: 5
    }
  ]

  const appComponent = shallow(<App />);
  appComponent.setState({players});

  const onScoreUpdate = appComponent.find(PlayerList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().players;
  
  expect(playersAfterUpdate[0].score).toEqual(10);

});