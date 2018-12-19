import React from 'react';
import PropertyItem from './PropertyDtails';

class PropertyList extends React.Component {
    constructor() {
      super();
      this.state = {
        realty: null,
        currentPage: 1,
        step: 10
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
        
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    componentWillMount(){  
      this.setState({realty : this.props.realty});
  }
  
    render() {
      const { realty, currentPage, step } = this.state;
      const indexOfLastElem = currentPage * step;
      const indexOfFirstElem = indexOfLastElem - step;
      const current = realty.slice(indexOfFirstElem, indexOfLastElem);
      const pageNumbers = [];
      const start  = (currentPage > 1)? currentPage - 1 :currentPage;

      for (let i = start; i <= (currentPage + 4); i++) {
          if( i <= Math.ceil(realty.length / step)){
            pageNumbers.push(i);
          }    
      }
     
      return (
        <div  className="property">
          <div className="property_list">
              {
                 current.map((realty, i) => <PropertyItem  realty={realty} key={i} />)   
              }
          </div>
          <div className="indicate_blok"> 
              <ul className="indicate_items">
                 {
                   pageNumbers.map(number =><li  key={number} id={number} onClick={this.handleClick}>{number}</li>)
                 }
              </ul>
              <p>Page : {currentPage}</p>
          </div>    
        </div>
      );
    }
  }

  export default PropertyList;