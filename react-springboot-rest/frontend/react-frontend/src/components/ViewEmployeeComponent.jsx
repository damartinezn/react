import React, { Component } from 'react'
import Employee from '../entity/Employee'
import EmployeeService from '../services/EmployeeService'


 class ViewEmployeeComponent extends Component {
     constructor(props) {
         super(props)

         this.state = {
             id: this.props.match.params.id,
             employee: new Employee()
         }

     }

     componentDidMount() {
         EmployeeService.getEmployeeById(this.state.id).then(res => {
             this.setState({ employee: res.data })             
         }).catch(err => {
             console.log(err);
         })
     }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee first name : </label>
                            <div>{this.state.employee.firstName}</div>                     
                        </div>
                        <div className="row">                            
                            <label>Employee last name : </label>
                            <div>{this.state.employee.lastName}</div>                            
                        </div>
                        <div className="row">                            
                            <label>Employee email id : </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
