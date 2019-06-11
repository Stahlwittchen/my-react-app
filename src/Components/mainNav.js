import React from 'react';

class MainNavItem extends React.Component {
    render(){
        return <li><a href="#">{this.props.name }</a></li>
    }
}

class MainNav extends React.Component {
    render(){
        return (
            <ul  className="App-nav">
                {
                    this.props.data.items.map(function (item) {
                        return (
                            <MainNavItem name={item} key={item} />
                        )
                    })
                }
            </ul>
        )
    }
}

export default MainNav;