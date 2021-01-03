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
                                                <button className="btn btn-warning" onClick={ ()=> this.editEmployee(employee.id) }>Edit</button>
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

