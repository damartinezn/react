import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    componentDidMount() {

        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
            console.log(this.employees);
            console.log(res);
        })
    }


    addEmployes = () => {
        this.props.history.push('/add-employees')
    }

    editEmployee = (id) => {
        this.props.history.push(`/update-employees/${id}`)
    }

    viewEmployee = (id) => {
        this.props.history.push(`/view-employees/${id}`)
    }

    deleteEmployee = (id) => {
        EmployeeService.deleteEmployeeById(id).then(res => {
            console.log(res);
            this.componentDidMount();
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>

                <h2 className="text-center text-danger ">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary btn-sm" onClick={this.addEmployes}>Add Employes</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button className="btn btn-sm btn-warning mr-1" onClick={() => this.editEmployee(employee.id)}>Edit</button>
                                                <button className="btn btn-sm btn-danger ml-1" onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                                <button className="btn btn-sm btn-info ml-1" onClick={() => this.viewEmployee(employee.id)}>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListEmployeeComponent

