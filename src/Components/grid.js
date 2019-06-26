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
        this.state = {
            items: this.props.data.items,
            newItem: ''
        };

        this.filterList = this.filterList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    updateList (e)
    {
        this.setState({
            newItem: e.target.value
        });
    }

    addItem (e)
    {
        e.preventDefault();
        this.setState({
            items: [...this.state.items, {title: this.state.newItem}],
            newItem: ''
        });
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
                <form onSubmit={this.addItem}  className='grid__add'>
                    <input type='text'
                           value={this.state.newItem}
                           onChange={this.updateList}
                    />
                    <button className='app-btn app-btn--primary'>Add Item</button>
                </form>
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