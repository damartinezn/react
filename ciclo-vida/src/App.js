import React, { Component } from 'react';
import EjemploComponentDidMount from './ComponentDidMount/componentDidMount';
import Example from './FetchApi/Example'
import EjemploCicloDeActualizacion from './Actualizacion/ejemploPaso1/ejemploCicloDeActualizacion'

class App extends Component {

  constructor(props){
    super(props)
    this.state={ mensajeIncial: 'mensaje de Bienvenida' }
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ mensajeIncial: ' CAMBIAMOS EL MENSAJE '})
  }

  render(){
    return (
      <div className="App">
        <EjemploCicloDeActualizacion/>
        {/*<Example/>
        <h4>Ciclo de vida de REACT</h4>
        {this.state.mensajeIncial}
        <hr/>
        <button onClick={this.handleClick}>Cambiar Mensaje</button>
        <EjemploComponentDidMount/>*/}
      </div>
    )
  }
}

export default App;
