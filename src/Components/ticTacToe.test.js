import React from 'react';
import { TicTacToe, Square, Board }  from './ticTacToe';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});


test('render Square', ()=> {
    const onClick = jest.fn();
    const value = 1;
    const square = shallow(<Square  value={value} onClick={onClick} />);
    const btn = square.find('button').simulate("click")
    expect(onClick).toHaveBeenCalled();
});

test('renders Board', ()=> {
    const squares = [null, null, null, null, "X", null, null, null, "O"];
     shallow(<Board squares={squares} />);
});

test('render Game', ()=> {
    shallow(<TicTacToe />);
});