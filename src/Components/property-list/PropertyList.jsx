import React from 'react';
import PropertyItem from './PropertyItem';
import './property-list.scss';


class PropertyList extends React.Component {
    constructor() {
      super();
      this.state = {
        realty: null,
        realtyFiltered: null,
        currentPage: 1,
        step: 10
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleSearchAddress = this.handleSearchAddress.bind(this);
    }

    handleSearchAddress(event){
      const search = event.target.value.toLowerCase();
      const {realty} = this.state;
      const filtered = realty.filter(realty =>{
              const searchString = realty.address.toLowerCase();
          return searchString.indexOf(search) !== -1;
      });
      this.setState({ realtyFiltered : filtered   });
    }
     
    handleSearch(event){
      const valueSearch = event.target.value;
      const searchBy =event.target.name; 
      const {realty}= this.state;
        if(valueSearch === "all"){
          this.setState({  realtyFiltered: realty }); 
        }else{
          const res = realty.filter( realty => realty[searchBy] === valueSearch);
          this.setState({  realtyFiltered: res }); 
        }
    }

    handleClick(event) {
      window.scrollTo(0, 0);
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    componentWillMount(){  
      this.setState({realty : this.props.realty , realtyFiltered : this.props.realty});
  }
  
    render() {
      const { realtyFiltered, currentPage, step } = this.state;
      const indexOfLastElem = currentPage * step;
      const indexOfFirstElem = indexOfLastElem - step;
      const current = realtyFiltered.slice(indexOfFirstElem, indexOfLastElem);
      const pageNumbers = [];
      const start  = (currentPage > 1)? currentPage - 1 :currentPage;
      for (let i = start; i <= (currentPage + 4); i++) {
          if( i <= Math.ceil(realtyFiltered.length / step)){
            pageNumbers.push(i);
          }    
      }
      
      return (
        <div  className="property">
           <div className="property_search_block">
              <div className="property_search_block_title">
                  <h1>Search menu</h1>
              </div>
              <div className="search_select_item">
                  <select className="search_select" name="type" onChange={this.handleSearch} >
                      <option value="all">All realty</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="commercial">Commercial</option>
                  </select>
              </div>
              <div className="search_select_item">
                  <select className="search_select" name="rooms" onChange={this.handleSearch}>
                      <option value="all">All rooms</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>    
                  </select>
              </div>
              <div className="search_select_item">
                     <input type="text" name="name" className="search_byName" 
                      placeholder="Find here..." onChange={this.handleSearchAddress}/>
              </div>      
          </div>
          <div className="property_list">
              {
                 current.map((realtyFiltered, i) => <PropertyItem  realty={realtyFiltered} key={i} />)   
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