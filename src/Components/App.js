import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './app.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <div className="app">
              <Header/>
                 <Main/>
              <Footer/>
            </div>   
        </BrowserRouter>    
    );
  }
}

export default App;
