import React from 'react';
import './buy-property.scss';
import PropertyList from './PropertyList';


class BuyProperty extends React.Component{
    constructor(){
        super();
        this.state = {realty: [] , filtered: []};
    }

    componentWillMount(){  
        fetch('fakeDB/realty/realty.json').then( (response)=> { 
                return response.json();
            }).then( (res)=> {
                this.setState({realty : res , filtered : res});
             }).catch( alert );          
    }

    render(){
        return(
            <div>
                {  
                  (this.state.filtered.length > 0)? <PropertyList  realty={this.state.filtered}/> : "Loading..."
                }
            </div>
        )
    }
}

export default BuyProperty;