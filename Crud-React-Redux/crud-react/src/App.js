import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import HomeContainer from './containers/HomeContainer'
import  CreateUserContainer  from './containers/CreateUserContainer'
import  EditeUserContainer  from './containers/EditeUserContainer'
import  DetailUserContainer  from './containers/DetailUserContainer'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Router>         
          <Route path="/" exact component={HomeContainer} />

          <Route path="/create" exact component={CreateUserContainer} />

          <Route path="/detail/:id" exact component={DetailUserContainer} />

          <Route path="/edit/:id" exact component={EditeUserContainer} />

        </Router>
      </div>
    )
  }
}

export default App;