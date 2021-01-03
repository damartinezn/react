import React, { Component } from 'react';
import ConditionalSection from './sections/conditional' 
import cars from './data/cars.json'
import './App.css';

class Listas extends Component{
  render(){
    const numbers = [1,1,2,3,4,5]
    return(
      <div>
        <h4>Trabajando con listas</h4>
        {numbers.map(
          (number, index)=>{
            return <p key={index}>Soy el numero {number}</p>
          }
        )}
      </div>
    )
  }
}

class Cars extends Component{
  render(){
    return(
      <div>
        <ul>
          {
            cars.map(car =>{
              return(
                <li key={car.id}>
                  <p><strong>Id : </strong>{car.id}</p>
                  <p><strong>Nombre : </strong>{car.name}</p>
                  <p><strong>Marca : </strong>{car.company}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function App() {
    return ( 
        <div className = "App" >
            <ConditionalSection />
            <Listas/>
            <Cars/>
        </div>
    );
}

export default App;