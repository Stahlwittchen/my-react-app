import React from "react";
import cards from "./images"

export class Card extends React.Component {
    constructor(){
        super()
        this.state = { isShow: false};
    }
    toggleCard = () => {
        const { onClick, el } = this.props;
        if(this.state.isShow){
            this.setState({isShow: false})
        } else {
            this.setState({isShow: true})
        }
        onClick(el)
    }
    render(){
        const { el } = this.props;
        const back =  "https://cs8.pikabu.ru/images/big_size_comm/2016-01_5/1453493607126438736.jpg";
        const src = this.state.isShow ? el.src : back;
        return (
            <div onClick={(e) => this.toggleCard()}>
                <img src={src} alt="" height="180"/>
            </div>
        )
    }
}

export class Field extends React.Component {

    toggleCard = (el) => {
        console.log(el)
    };

    render(){
        return (
            <ul className="cards">
                {this.props.arr.map( (el, index) => {
                    return (
                        <Card key={index} el={el} onClick={this.toggleCard} />
                    )
                })}
            </ul>
        )
    }
}

export class MemoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: []
        };
    }
    launchGame = () => {
        this.setState({
            round: []
        });
        let arr = [];
        for (let i = 0; i < 9; i++) {
            let item = cards[Math.floor(Math.random() * cards.length)];
            if (arr.includes(item)) {
                i--;
            } else {
                arr.push(item)
            }

        }

        let arr2 = [...arr];

        arr2 = arr2.map(el => {
            let newEl = Object.assign({}, el)

            newEl.id = newEl.id + "c";
            return newEl
        });

        this.setState({
            round: [...arr, ...arr2]
        })
    };

    render(){
        return (
            <>
                <Field arr={this.state.round}></Field>
                <button onClick={this.launchGame}>launch the game</button>
            </>
        )
    }
}
export default MemoryGame;