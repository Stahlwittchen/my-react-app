import React from "react";
import cards from "./images"
import Field from "./Memory/Field";

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
        //arr = arr.map(el => ({...el, isShow: false }))

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
                <Field arr={this.state.round} />
                <button onClick={this.launchGame}>launch the game</button>
            </>
        )
    }
}
export default MemoryGame;