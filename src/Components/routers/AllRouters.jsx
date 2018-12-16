import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import  Home from '.././home';
import About from '.././about';
import Contacts from '.././contacts';
import Brokers from '.././brokers';
import AllConatacts from '../contacts/All';
import BuyProperty from '../buy-property';
import RentProperty from '../rent-property';


class AllRouters extends Component {
  render() {
    return (  
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route  path='/contacts' component={Contacts} />
            <Route  path='/contacts/all' component={AllConatacts} />
            <Route  path='/brokers' component={Brokers} />
            <Route  path='/buy-property' component={BuyProperty} />
            <Route  path='/rent-property' component={RentProperty} />
        </div>   
     );
   }
}

export default AllRouters;
