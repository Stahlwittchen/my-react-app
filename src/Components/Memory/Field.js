import React from "react";
import Card from "./Card";

export class Field extends React.Component {
    constructor(){
        super();
        this.state = {
            prevId: null,
            isPair: null,
            score: 0,
            guessedPairs: 0
        };
    }

    toggleCard = (el) => {
        const cleanId = el.id.length === 2 ? el.id : el.id.slice(0, -1);

        if (!this.state.prevId) {
            this.setState({ prevId: cleanId, isPair: null });
        } else {
            this.setState({ prevId: null, isPair: this.state.prevId === cleanId });
            if (this.state.prevId === cleanId){
                this.setState({guessedPairs: this.state.guessedPairs + 1})
            }
            this.renderScore(this.state.prevId === cleanId)
        }
    };

    renderScore = (isPair) => {
        const score = isPair ? this.state.score + (8 - this.state.guessedPairs) * 42 : this.state.score - this.state.guessedPairs* 42;
         return this.setState({score: score})
    };

    render(){
        const { arr } = this.props;
        const { isPair } = this.state;
        return (
            <ul className="cards">
                {
                    arr.map( (el, index) => {
                        return <Card key={index} el={el} isPair={ isPair } onClick={this.toggleCard} />
                    })
                }
                { this.state.score } score
            </ul>
        )
    }
}

export default Field;