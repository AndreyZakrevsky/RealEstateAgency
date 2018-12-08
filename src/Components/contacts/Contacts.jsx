import React from 'react';
import { BrowserRouter , Route , Link  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import AllConatacts from './All';

const history = createBrowserHistory();
const Contacts = ()=>(
    <div>
        
        <BrowserRouter history={history}>
            <div >
            <a href="#" ><Link to="/contacts/all">All contacts</Link></a> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit esse, tempore dignissimos dolores quam consequatur natus doloremque aliquid? Modi corporis eligendi sapiente porro doloribus magni itaque, laborum minus rem?</p>
                  <Route path='/contacts/all' component={AllConatacts} />
                          
            </div>   
          </BrowserRouter>
    </div>
);

export default Contacts;