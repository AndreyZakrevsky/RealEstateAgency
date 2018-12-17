import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import  Home from '.././home';
import About from '.././about';
import Contacts from '.././contacts';
import Brokers from '.././brokers';
import BuyProperty from '../buy-property';
import RentProperty from '../rent-property';
import Gallery from '../gallery';


class AllRouters extends Component {
  render() {
    return (  
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route  path='/contacts' component={Contacts} />
            <Route  path='/brokers' component={Brokers} />
            <Route  path='/buy-property' component={BuyProperty} />
            <Route  path='/rent-property' component={RentProperty} />
            <Route  path='/gallery' component={Gallery} />
        </div>   
     );
   }
}

export default AllRouters;
