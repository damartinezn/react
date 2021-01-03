import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackHomeComponent from '../components/BackHomeComponent'
import { connect } from 'react-redux'
import FormComponent from '../components/FormComponent'
import PropTypes from 'prop-types'
import { getUserDetail, puttUserEdit } from '../actions/UserActions';
import swal from 'sweetalert';


const mapStateToProps = (state) => {
    return {
        getResponDatUser: state.person.getResponDatUser,
        errorResponseDataUser: state.person.errorResponseDataUser,
    };
};

class EditeUserContainer extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }


    _fetchMovie({ id }) {
        this.props.dispatch(getUserDetail(id))
    }

    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    handleSubmit(data) {
        this.props.dispatch(puttUserEdit(data, this.props.match.params.id));
        console.log('editar', data)
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
                    "User Edit!",
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
                    <h1>Editar User</h1>
                    <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(EditeUserContainer)