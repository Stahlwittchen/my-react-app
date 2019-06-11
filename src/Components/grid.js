import React from 'react';


class GridItem extends React.Component {
    render(){
        return (
            <div className='grid__item'>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });

        this.setState({items: filteredList});
    }
    render(){
        return (
            <div>
                <div className='grid__search'>
                    <input placeholder="Search" onChange={this.filterList} />
                </div>
                <div className='grid__add'>
                    <input placeholder="Add " />
                </div>
                <div className='grid'>
                    {
                        this.state.items.map(function (item) {
                            return <GridItem title={item.title}
                                             description={item.description}
                                             key={item}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Grid;