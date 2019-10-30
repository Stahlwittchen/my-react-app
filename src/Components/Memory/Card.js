import React from "react";

export class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = { isShow: false, isRemoved: false};
    }

    shouldComponentUpdate(nextProps, nextState){
        return  nextState.isShow || (this.state.isShow && this.props.hasTwoCards)
    }

    componentDidUpdate(prevProps) {
         if (this.props.hasTwoCards || prevProps.hasTwoCards) {
             setTimeout(() => {
                if ( this.state.isShow) {
                    if (this.props.isPair ){
                        this.setState({ isShow: false });
                        console.log('remove card')
                    } else {
                        this.setState({ isShow: false });
                        console.log('Hide card')
                    }

                }
             }, 1000);
         }
    }


    ShowCard = () => {
        const { onClick, el } = this.props;
        this.setState({ isShow: true });
        onClick(el);
    };

    render(){
        console.log("render")
        const { el } = this.props;
        const back =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDPQS66rgZIMojOWqymU_ErFzmCoPdn9MWsDkiSQmi11-mIo7vg&s";
        const src = this.state.isShow ? el.src : back;
        // if (this.state.isRemoved) {
        //     return
        // }
        return (
            <div onClick={(e) => this.ShowCard()}>
                <img src={ src } alt="" height="180"/>
            </div>
        )
    }
}

export default Card;