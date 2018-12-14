import React from 'react';
import './broker-details.scss';

class BrokerDeteils extends React.Component {
    render() {
        const{name , status , email , phone , img} = this.props.broker;
        const src = "fakeDB/brokers/images/"+ img;
      return (
            <div className="broker_kard">
                <div className="broker_image">
                   <img src={src} alt="Broker"/> 
                </div>
                <div className="broker_body">
                   <h2>{name}</h2>
                   <p>{status}</p>
                   <p><span>&#9993;</span> {email}</p>
                   <p><span>&#9990;</span> {phone}</p>
                </div>    
            </div>
        )
    }
}

export default BrokerDeteils;