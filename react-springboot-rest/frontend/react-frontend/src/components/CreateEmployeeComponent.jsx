import React, { Component } from 'react'
import Employee from '../entity/Employee';
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: 'Add Employee',
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    componentDidMount() {
        if (this.props.match.params.id === undefined) {
            return
        } else {
            this.setState({ title:'Update Employee' })
            EmployeeService.getEmployeeById(this.props.match.params.id).then(res => {
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

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = new Employee(this.state.firstName, this.state.lastName, this.state.emailId);
        console.log('employee ' + JSON.stringify(employee));

        if (this.props.match.params.id === undefined) {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
                console.log(res);
            }).catch(error => {
                console.log(error);
            })    
        } else {
            EmployeeService.updateEmployee(employee, this.props.match.params.id).then(res => {
                this.props.history.push('/employees');
            }).catch(error => {
                console.log(error);
            })
        }
        
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
                            <h3 className="text-center">{ this.state.title }</h3>
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
                                    <button className="btn btn-success" onClick={this.saveEmployee}>{this.props.match.params.id===undefined?'Save':'Edit'}</button>
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

export default CreateEmployeeComponent
