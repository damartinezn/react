import React, { Component } from 'react'
import Employee from '../entity/Employee'
import EmployeeService from '../services/EmployeeService'


 class UpdateEmployeeComponent extends Component {

     constructor(props) {
         super(props)

         this.state = {
             id: this.props.match.params.id,
             firstName: '',
             lastName: '',
             emailId: ''
         }
     }

     componentDidMount() {
         EmployeeService.getEmployeeById(this.state.id).then(res => {
             console.log(res);
             let employee = res.data;
             this.setState({
                 firstName: employee.firstName,
                 lastName: employee.lastName,
                 emailId: employee.emailId
             })
         }).catch(error => {
             console.log(error);
         });
     }

     changeFirstNameHandler = (event) => {
         this.setState({ firstName: event.target.value })
     }

     changeEmailIdHandler = (event) => {
         this.setState({ emailId: event.target.value })
     }

     changeLNameHandler = (event) => {
         this.setState({ lastName: event.target.value })
     }

     updateEmployee = (event) => {
         event.preventDefault();
         let employee = new Employee(this.state.firstName, this.state.lastName, this.state.emailId);
         console.log('employee ' + JSON.stringify(employee));
         EmployeeService.updateEmployee(employee, this.state.id).then(res => {
             this.props.history.push('/employees');
         }).catch(error => {
             console.log(error);
         })
     }

     cancel = () => {
         this.props.history.push('/employees')
     }

     render() {
         return (
             <div>
                 <div className="container ">
                     <div className="row ">
                         <div className="card col-md-6 offset-md-3 mt-5" >
                             <h3 className="text-center">Update Employee</h3>
                             <div className="card-body">
                                 <form>
                                     <div className="form-group">
                                         <label >First Name</label>
                                         <input type="text" placeholder="First Name" name="firstname" className="form-control"
                                             value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                     </div>
                                     <div className="form-group">
                                         <label >Last Name</label>
                                         <input type="text" placeholder="Last Name" name="lastname" className="form-control"
                                             value={this.state.lastName} onChange={this.changeLNameHandler} />
                                     </div>

                                     <div className="form-group">
                                         <label >Email</label>
                                         <input type="email" placeholder="Email" name="email" className="form-control"
                                             value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                     </div>
                                     <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                     <button className="btn btn-danger ml-3" onClick={this.cancel}  >Cancel</button>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         )
     }
 }

export default UpdateEmployeeComponent

