import React, { Component } from 'react'

 class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All Rights Reserved 2020 @Alex</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
