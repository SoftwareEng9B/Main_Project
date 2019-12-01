import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
let AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
 
class SimpleMap extends Component {

  render() {
    if(this.props.zipCoords){
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{key: require('./config').GOOGLE_MAPS_CLIENT_KEY}}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33 
            }}
            defaultZoom={11}
            center={this.props.zipCoords}
          >
            <AnyReactComponent
              lat={this.props.zipCoords.lat}
              lng={this.props.zipCoords.lng}
              text={this.props.zipcode}
            />
          </GoogleMapReact>
        </div>
      );
    }else{
      return <div></div>;
    }
  }
}
 
export default SimpleMap;
