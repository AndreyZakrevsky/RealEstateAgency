import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './app.scss';
// import { BrowserRouter , Router } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router >
            <div className="app">
              <Header/>
                 <Main/>
              <Footer/>
            </div>   
        </Router>    
    );
  }
}

export default App;
