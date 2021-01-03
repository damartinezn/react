import React, { Component } from 'react'
import  TableComponent  from "../components/TableComponent";
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getUserList,  deleteDataUser } from '../actions/UserActions'

class HomeContainer extends Component {    

    componentDidMount(){        
        this.props.dispatch(getUserList());        
        this.props.dispatch(deleteDataUser()); 
    }

    render() {                
        return (
            <div>
                <Container>
                    <TableComponent />
                </Container>
            </div>
        )
    }
}

export default connect(null,null)(HomeContainer);
