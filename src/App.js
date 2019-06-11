import React from 'react';
import './App.scss';
import Grid from "./Components/grid";
import Clock from "./Components/clock"
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import LoginControl from './Components/loginControl';

const Data = {
    items: [
        {title: 'item 1', description: 'lorem 1'},
        {title: 'item 2', description: 'lorem 2'},
        {title: 'item 3', description: 'lorem 3'},
        {title: 'item 4', description: 'lorem 4'},
        {title: 'item 5', description: 'lorem 5'},
        {title: 'item 6', description: 'lorem 6'}
    ]
}

function App() {
  return (
    <BrowserRouter className="App">
        <header>
            <div className="container App-header">
                <a href='#' className="App-header__logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-header__logo--text">My react app</span>
                </a>
                <nav  className="App-nav">
                    <Link to='/' className='App-nav__link'>Home</Link>
                    <Link to='/Grid' className='App-nav__link'>Grid</Link>
                </nav>
                <LoginControl  isLoggedIn={false}  />
            </div>
        </header>
        <main className="container">
            <Route exact path='/' component={Clock}  />
            <Route path='/Grid'
                   render={(props) => <Grid {...props} data={Data}/>}
            />
        </main>
    </BrowserRouter>
  );
}

export default App;
