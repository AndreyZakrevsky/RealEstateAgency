import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './header';
import Footer from './footer';
import  Home from './home'
import About from './about'
import Contacts from './contacts'

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <BrowserRouter history={history}>
            <div >
              <Header/>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/contacts' component={Contacts} />
              {/* <Footer/> */}
            </div>   
      </BrowserRouter>
     
    );
  }
}

export default App;
