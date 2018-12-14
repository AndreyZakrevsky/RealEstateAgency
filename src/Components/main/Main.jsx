import React, { Component } from 'react';
import './main.scss';
import AllRouters from '../routers';


class Main extends Component {
  render() {
    return (
        <main>
            <AllRouters/>
        </main>    
    );
  }
}

export default Main;
