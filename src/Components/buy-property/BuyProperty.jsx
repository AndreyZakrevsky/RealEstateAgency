import React from 'react';
import './buy-property.scss';
import PropertyList from '../property-list';


class BuyProperty extends React.Component{
    constructor(){
        super();
        this.state = {realty: [] };
    }

    componentWillMount(){  
        fetch('fakeDB/realty/realty.json').then( (response)=> { 
                return response.json();
            }).then( (res)=> {
               return res = res.filter( elem=> elem.status === "Sale");
             }).then( (res)=> {
                this.setState({realty : res });
             }).catch( alert );               
    }

    render(){
        return(
            <div>
                {  
                  (this.state.realty.length > 0)? <PropertyList  realty={this.state.realty}/> : "Loading..."
                }
            </div>
        )
    }
}

export default BuyProperty;