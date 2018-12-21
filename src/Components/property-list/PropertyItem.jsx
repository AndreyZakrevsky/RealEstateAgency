import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class PropertyItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={ isOpen: false };

        this.handleClick = this.handleClick.bind(this);
      }
 
      handleClick(){
          this.setState({
            isOpen: !this.state.isOpen
          });
      }

    render(){
         const {address ,id , status ,type , rooms , area , price , img} = this.props.realty;
         const{isOpen} = this.state;
         const src = "fakeDB/realty/img/"+ img[0];
         const srcGal =[];
            img.map( (img)=>{
                const itemImg ={
                    original: "fakeDB/realty/img/"+ img,
                    thumbnail: "fakeDB/realty/img/"+ img
                } 
                srcGal.push(itemImg);
                return srcGal;
            }); 
        return(
            <div id={id} className="property_item" >
                {
                   (!isOpen) && <h2 className="property_item_address"  >{address}</h2>     
                } 
                {
                   (!isOpen) && <img className="prop_main_img" src={src} alt="Property"/>
                    
                } 
                {
                    isOpen &&<div className="hide_show_block">
                                <div className="hide_show_gallery">
                                    <ImageGallery items={srcGal}
                                        disableThumbnailScroll={true}
                                        disableArrowKeys={true}
                                        showNav={true}
                                        showIndex={true}
                                        showFullscreenButto={true}
                                        showBullets={true}
                                        infinite={true}
                                    />
                                </div>
                                <div className="hide_show_description">
                                    <ul className="description_list">
                                        <li className="description_list_elem">
                                            <h3> Address : {address}</h3>
                                        </li>
                                        <li className="description_list_elem">
                                            <h3>Status : {status}</h3>
                                        </li>
                                        <li className="description_list_elem">
                                            <h3>Type : {type}</h3>   
                                        </li>
                                        <li className="description_list_elem">
                                            <h3>Rooms : {rooms}</h3>
                                        </li>
                                        <li className="description_list_elem">
                                            <h3>Area : {area}</h3>
                                        </li>
                                        <li className="description_list_elem">
                                            <h3>Price : {price}</h3>
                                        </li>
                                    </ul>
                            </div>
                     </div>
                  }     
                <button className="show_btn" onClick={this.handleClick}> {(isOpen)? "Hide": "Show"} </button>
            </div>
       )
    }
}

export default PropertyItem;

