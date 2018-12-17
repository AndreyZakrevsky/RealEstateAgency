import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div className="point">{text}</div>;

 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 49.22208199,
      lng: 28.43596458
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCxNQC_c0deDBx3R7Zd5seGlbdIVmVGoW0"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
              lat={49.22208199}
              lng={28.43596458}
              text={'Estate Agency'} 
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;