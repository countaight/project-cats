import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Queens from './pages/Queens';
import Kings from './pages/Kings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="App-title">
              <h1>Loyola's</h1>
              <h2>Painted Bengals</h2>
            </div>
            <img src={logo} className="App-logo" alt="logo" style={{flex: 1}}/>
            <ul style={styles.nav}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/queens">Queens</Link></li>
              <li><Link to="/kings">Kings</Link></li>
            </ul>
          </header>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/queens" component={Queens} />
              <Route path="/kings" component={Kings} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const styles = {
  nav: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    flex: 1,
    alignItems: 'flex-end',
  },
}

export default App;
