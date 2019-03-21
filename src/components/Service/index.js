import React, { Component } from 'react'
import './style.css'
import axios from 'axios';
import MapContainer from '../Map'

class Service extends Component {
  constructor() {
    super()
    this.state = {
      origin: '',
      destination: '',
      originUbication: null,
      destinationUbication: null,
      distance: null,
      time: null,
      showService: false
    }
  }

  onOriginChange = val => {
    this.setState({
      origin: val.target.value
    })
  }

  onDestinationChange = val => {
    this.setState({
      destination: val.target.value
    })
  }

  callAPI = () => {
    axios.get(`https://f5e59aee-8f3a-418c-aa1d-5e0c0d582dd8.mock.pstmn.io/?origin=${this.state.origin}&destination=${this.state.destination}`)
      .then(res => {
        this.setState({
          distance: res.data.distance,
          time: res.data.duration,
          originUbication: res.data.ubication.origin,
          destinationUbication: res.data.ubication.destination,
          showService: true
        })
      })
      .catch(err => {
        console.log(err)
        alert('No se pudo obtener la información')
      })
  }

  render() {
    return (
      <div>
        {
          !this.state.showService ? (
            <React.Fragment>
              <div className="Page">
                <p>Nuevo servicio</p>
                <form
                  onSubmit={event => {
                    this.callAPI()
                    event.preventDefault()
                  }}
                  className='Form'>
                  <div>
                    <input className='Input' placeholder='Ingrese dirección de origen' onChange={(val) => this.onOriginChange(val)} />
                  </div>
                  <div>
                    <input className='Input' placeholder='Ingrese dirección de destino' onChange={(val) => this.onDestinationChange(val)} />
                  </div>
                  <button className='Input'>Submit</button>
                </form>
                <button className='Input' onClick={() => this.props.history.push('/')}>Cerrar Sesion</button>
              </div>
            </React.Fragment>
          ) : (
              <React.Fragment>
                <div className='Service'>
                  <div >
                    <p>Su servicio</p>
                    <p>Dirección de origen: {this.state.origin}</p>
                    <p>Dirección de destino: {this.state.destination}</p>
                    <p>Distancia a recorrer: {this.state.distance}</p>
                    <p>Tiempo estimado: {this.state.time}</p>
                    <button onClick={() => this.setState({ showService: false })}>Crear nuevo servicio</button>
                  </div>
                  <div style={{backgroundColor: 'white'}}>
                    <MapContainer origin={this.state.originUbication} destination={this.state.destinationUbication} />
                  </div>
                </div>
              </React.Fragment>
            )
        }
      </div>
    );
  }
}

export default Service