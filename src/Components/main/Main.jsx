import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import  Home from '.././home';
import About from '.././about';
import Contacts from '.././contacts';
import './main.scss';


class Main extends Component {
  render() {
    return (
        <main>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
        </main>    
    );
  }
}

export default Main;
