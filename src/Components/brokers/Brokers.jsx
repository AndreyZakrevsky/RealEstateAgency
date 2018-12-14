import React from 'react';
import './brokers.scss';
import BrokerDeteils from '.././broker-details';

class Brokers extends React.Component{
    constructor(){
        super();
        this.state = {brokers: [] , filtered: []};

        this.handleSearch = this.handleSearch.bind(this);
    }

     handleSearch(event){
        const search = event.target.value.toLowerCase();
        const filtered= this.state.brokers.filter(broker =>{
                const searchString = broker.name.toLowerCase();
            return searchString.indexOf(search) !== -1;
        });
        this.setState({ filtered  });
    }
    
    componentWillMount(){  
        fetch('fakeDB/brokers/brokers.json').then( (response)=> { 
                return response.json();
            }).then( (brok)=> {
                this.setState({brokers : brok , filtered : brok});
             }).catch( alert );          
    }

    render(){
        return(
            <div className="brokers">
                <div className="brokers_title">
                    <h2>Our Brokers</h2>
                </div>
                <div className="brokers_search-bar">           
                   <input  type="text"  className="search-input" placeholder="&#10156; Look for..." onChange={this.handleSearch}/>
                </div> 
                <div className="brokers_list">
                    {  
                        (this.state.filtered.length > 0)? this.state.filtered.map((broker , i)=> 
                                        <BrokerDeteils key={i} broker={broker} />)  : "There is no such broker"
                    }
                </div>
            </div>
        )
    }
}

export default Brokers;


