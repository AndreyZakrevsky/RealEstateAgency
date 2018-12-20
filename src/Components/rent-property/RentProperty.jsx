import React from 'react';
import PropertyList from '../property-list';


class RentProperty extends React.Component{
    constructor(){
        super();
        this.state = {realty: [] };
    }

    componentWillMount(){  
        fetch('fakeDB/realty/realty.json').then( (response)=> { 
                return response.json();
            }).then( (res)=> {
               return res = res.filter( elem=> elem.status === "Rent");
             }).then( (res)=> {
                 console.log(res.length);
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

export default RentProperty;