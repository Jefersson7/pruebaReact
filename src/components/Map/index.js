import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={{ width: '50%', height: '50%', top: '-20%', left: '-35%', position: 'absolute' }}
        google={this.props.google}
        initialCenter={{
          lat: 4.6505513,
          lng: -74.11887
        }}
        zoom={11}>
        <Marker position={{ lat: this.props.origin.lat, lng: this.props.origin.lon }} />
        <Marker position={{ lat: this.props.destination.lat, lng: this.props.destination.lon }} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDdd-vytpEBdMk7xO0MyX-306srTFb7V1E"
})(MapContainer)