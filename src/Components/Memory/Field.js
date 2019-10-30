import React from "react";
import Card from "./Card";

export class Field extends React.Component {
    constructor(){
        super();
        this.state = {
            prevId: null,
            isPair: false,
            hasTwoCards: false
        };
    }

    toggleCard = (el) => {
        const cleanId = el.id.length === 2 ? el.id : el.id.slice(0, -1);
        if (!this.state.prevId) {
            this.setState({ prevId: cleanId, hasTwoCards: false });
        } else {
            this.setState({ prevId: null, hasTwoCards: true, isPair: this.state.prevId === cleanId });
        }
    };

    render(){
        const {arr} = this.props;
        const {isPair, hasTwoCards} = this.state;
        return (
            <ul className="cards">
                {arr.map( (el, index) => {
                    return (
                          <Card key={index} el={el} isPair={isPair} hasTwoCards={hasTwoCards} onClick={this.toggleCard} />
                    )
                })}
            </ul>
        )
    }
}

export default Field;