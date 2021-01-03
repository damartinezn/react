import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from '../src/components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
/*mport UpdateEmployeeComponent from './components/UpdateEmployeeComponent';*/

function App() {
  return (
    <div>
      <Router>

        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employees" component={CreateEmployeeComponent}></Route>
            <Route path="/update-employees/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employees/:id" component={ViewEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />

      </Router>
    </div>

  );
}

export default App;
