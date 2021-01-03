import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackHomeComponent from '../components/BackHomeComponent'
import FormComponent from '../components/FormComponent'
import { connect } from 'react-redux';
import { postUserCreate } from '../actions/UserActions';
import swal from 'sweetalert';


const mapStateToProps = (state) => {
    return {
        getResponDatUser: state.person.getResponDatUser,
        errorResponseDataUser: state.person.errorResponseDataUser,
    };
};

class CreateUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(postUserCreate(data));
        console.log(data)
    }


    render() {

        if (this.props.getResponDatUser || this.props.errorResponseDataUser) {
            if (this.props.errorResponseDataUser) {
                swal(
                    "Failed!",
                    this.props.errorResponseDataUser,
                    "error"
                );
            } else {
                swal(
                    "User Created!",
                    "Nombre : " +
                    this.props.getResponDatUser.name +
                    " , Apellido : " +
                    this.props.getResponDatUser.lastname,
                    "success"
                );
            }
        }

        return (
            <div>
                <Container>
                    <BackHomeComponent />
                    <h1>Create User</h1>
                    <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
                </Container>
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(CreateUserContainer)
