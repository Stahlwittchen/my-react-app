import React from 'react';
import { TicTacToe, Square, Board }  from './ticTacToe';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});


test('render a Square', ()=> {
    const onClick = jest.fn();
    const value = 1;
    const square = shallow(<Square  value={value} onClick={onClick} />);
    square.find('button').simulate("click");
    expect(onClick).toHaveBeenCalled();
});

it('render a Board', ()=> {
    const squares = Array(9).fill(null);
    const board = mount(<Board squares={squares} />);
    expect(board.find(Square).length).toBe(9);
});

it('render game status correctly', () => {
    const wrapper = mount(<TicTacToe/>);

    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Следующий ход: X');

    const button = wrapper.find('button.square').first();
    button.simulate('click');

    const secondPlayer = wrapper.find('div.game-info').children().first().text();
    expect(secondPlayer).toEqual('Следующий ход: O');
});

it('renders a win game', () => {
    const wrapper = mount(<TicTacToe/>);
    //x,0,null
    //null,x,0
    //null,null,x

    //player 1
    const turn1 = wrapper.find('button.square').first();
    turn1.simulate('click');
    //player 2
    const turn2 = wrapper.find('button.square').at(1);
    turn2.simulate('click');
    //player 1
    const turn3 = wrapper.find('button.square').at(4);
    turn3.simulate('click')
    //player 2
    const turn4 = wrapper.find('button.square').at(5);
    turn4.simulate('click');
    //player 1
    const turn5 = wrapper.find('button.square').at(8)
    turn5.simulate('click');

    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Выиграл X')
});

it('render a draw game', () => {
    const wrapper = mount(<TicTacToe/>);
     //x,0,0
    //0,x,x
    //null,x,0

    const button = wrapper.find('button.square').at(4);
    button.simulate('click')

    //player 2
    const turn2 = wrapper.find('button.square').at(2)
    turn2.simulate('click')
    //player 1
    const turn3 = wrapper.find('button.square').at(5)
    turn3.simulate('click')
    //player 2
    const turn4 = wrapper.find('button.square').at(3)
    turn4.simulate('click')
    //player 1
    const turn5 = wrapper.find('button.square').at(0)
    turn5.simulate('click')

    const turn6 = wrapper.find('button.square').at(8)
    turn6.simulate('click')
    //player 1
    const turn7 = wrapper.find('button.square').at(7)
    turn7.simulate('click')
    //player 2
    const turn8 = wrapper.find('button.square').at(1)
    turn8.simulate('click')

    const draw = wrapper.find('div.game-info').children().first().text()
    expect(draw).toEqual('Ничья')
})