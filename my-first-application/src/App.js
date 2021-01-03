import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Hello (props){
  return <h2>{props.title}</h2>
}

const HelloSimplificada = (props) => <h2>{props.title}</h2>

class HelloClass extends Component{
  render(){
  return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render(){

    const {
      arrayOfNumbers,
      abjectWithInfo,
      boolean,
      title,
      titulo,
      number,

    } = this.props

    const textoSegunBool = boolean ? 'Cierto':'Falso'
    const mappedNumbers = arrayOfNumbers.map(n => n*2)
    const mappedNumbers2 = arrayOfNumbers.map(this.props.multiply)

    return(
      <div>
        {titulo}
        <p>{title}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{arrayOfNumbers.join(',')}</p>
        <p>{mappedNumbers.join(',')}</p>
        <p>{mappedNumbers2.join(',')}</p>
        <p>{abjectWithInfo.key}</p>
        
      </div>
    )
  }
}

class Title extends Component{
  render(){
    return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps ={
  text: 'Titulo por defecto'
}

class Contador extends Component{

  constructor(props){
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(()=>{
      this.setState({contador: this.state.contador+1})
    },1000)
  }

  render(){    
    return( 
      <div>
        <span>{this.state.contador}</span> 
        <p>Hola prro</p>
        <ContadorNumero numero={this.state.contador}/>
      </div>
      )
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component{
  render(){
    return <span>{this.props.numero}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text='Otro texto desde el props'/>
        <img src={logo} className="App-logo" alt="logo" />
        <Contador contadorInicial={100}/>
        
        <p>
          Edit and save to reload. Micaela te amo
        </p>
        <Hello title="App-intro"/>
        <HelloSimplificada title="Vales verga"/>
        <HelloClass title="Te extraño"/>
        <Text 
            abjectWithInfo = {{ key:'First Value', key2:'Second value' }}
            arrayOfNumbers ={[2,3,10]}
            multiply={(number) => number*4}
            title="Mostrar numero" 
            titulo = {<h1>Titulo del documento</h1>}
            number={12} 
            boolean={true}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
