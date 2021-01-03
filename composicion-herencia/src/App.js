import React, { Component } from 'react';
import Article from './StalessComponent/Article'
import BitCoinpriceContainer from './Contenedor-Contenido/BitCoin'

class Button extends Component{
  render(){
    return(
      <button style={{ borderColor: this.props.borderColor, display: 'block' }}>
        {this.props.label}
      </button>
    )
  }
}

Button.defaultProps = {
  borderColor: '#09f'
};

class ButtonDanger extends  Component{
  render(){
    return <Button borderColor='red' label={this.props.label}/>
  }
}

class ButtonWithLegend extends Component{
  render(){
    return(
      <div>
        <Button label={this.props.label} borderColor={this.props.borderColor}/>
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <BitCoinpriceContainer/>
      <Article/>
      <h2>Composición vs Herencia</h2>
      <Button label='Clic aqui ppro'/>
      <ButtonDanger label='Button danger prro'/>
      <ButtonWithLegend 
          label='Button con legend prro'
          legend='La leyenda esta aqui'/>
    </div>
  );
}

export default App;
