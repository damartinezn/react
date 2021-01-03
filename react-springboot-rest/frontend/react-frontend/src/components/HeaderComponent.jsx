import React, { Component } from 'react'


 class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navar-dark bg-dark">
                        <div><a href="http://localhost:3000/" className="navbar-brand">Employees</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
