import React, { Component } from 'react';
import Forms from './formularios/form'
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.state = { mouseX: 10, mouseY: 10 }
  }

  handleMouseEvent = (e) => {
    const { clienteX, clienteY } = e
    console.log(e)
    console.log(clienteX)
    console.log(clienteY)
    this.setState({ mouseX: clienteX, mouseY: clienteY })
  }

  handleClick(e){
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi here!')
  }

  render(){
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div onMouseMove = {this.handleMouseEvent}
              style={{ border: '1px solid #000' , marginTop: 10, padding: 10}}>

            <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
        <hr/>
        <Forms/>
      </div>
    )
  }
}

export default App;
