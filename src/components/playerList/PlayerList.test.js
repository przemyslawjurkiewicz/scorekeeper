import PlayerList from './PlayerList';
import Player from '../player/Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<PlayerList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const playerComponent = shallow(<PlayerList players={players} />);
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
});

it('renders correct score update', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();

    const playerComponent = shallow(<PlayerList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    
    expect(mockedOnScoreUpdate).toBeCalledWith(0,10);
});

it('render correct when player remove', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayerList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
    
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerDelete = firstPlayer.prop('onPlayerRemove') 
    onPlayerDelete(0);

    expect(mockedOnPlayerRemove).toBeCalledWith(0);
});