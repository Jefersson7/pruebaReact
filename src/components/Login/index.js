import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onUsernameChange = val => {
    this.setState({
      username: val.target.value
    })
  }

  onPasswordChange = val => {
    this.setState({
      password: val.target.value
    })
  }

  render() {
    return (
      <div className="Page">
        <p>Bienvenido</p>
        <form
          onSubmit={event => {
            event.preventDefault()
            if (this.state.username && this.state.password) {
              this.props.history.push('/service')
            } else {
              alert('Por favor ingrese usuario y contraseña')
            }
          }}
          className='Form'>
          <div>
            <input className='Input' placeholder='Nombre de Usuario' onChange={(val) => this.onUsernameChange(val)} />
          </div>
          <div>
            <input className='Input' placeholder='Contraseña' type='password' onChange={(val) => this.onPasswordChange(val)} />
          </div>
          <button className='Input'>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
