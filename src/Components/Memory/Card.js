import React from "react";

export class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = { isShow: false, isRemoved: false};
    }

    shouldComponentUpdate(nextProps, nextState){
        if( ( !this.state.isShow && nextState.isShow) ){
            console.log( this.props.isPair ===false&&nextProps.isPair===null )
        }

        return ( !this.state.isShow && nextState.isShow) || this.state.isShow
    }

    componentDidUpdate(prevProps) {
        if(this.state.isRemoved || this.props.isPair === null) return false;

        if (!this.props.isPair){
            setTimeout(() => {
                this.setState({ isShow: false });
             }, 1000);
        } else {
            setTimeout(() => {
                this.setState({ isShow: false, isRemoved: true });
            }, 1000);
        }
    }


    ShowCard = () => {
        const { onClick, el } = this.props;
        this.setState({ isShow: true });
        onClick(el);
    };

    render(){
        const { el } = this.props;
        const back =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDPQS66rgZIMojOWqymU_ErFzmCoPdn9MWsDkiSQmi11-mIo7vg&s";
        const src = this.state.isShow ? el.src : back;
        if (!this.state.isRemoved) {
            return (
                <div onClick={(e) => this.ShowCard()}>
                    <img src={ src } alt="" height="180"/>
                </div>
            )
        } else return <div></div>
    }
}

export default Card;