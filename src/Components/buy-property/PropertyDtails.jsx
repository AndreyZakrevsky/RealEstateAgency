import React from 'react';


const PropertyItem = (props)=>{
    const {address ,id } = props.realty;
    return(
        <div className="property_list_item">
            <h1>{id}</h1>
        </div>
)};

export default PropertyItem;