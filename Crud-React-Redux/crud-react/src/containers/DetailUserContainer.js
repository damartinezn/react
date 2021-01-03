import React, { Component } from 'react'
import BackHomeComponent from '../components/BackHomeComponent'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getUserDetail } from '../actions/UserActions';
import DetailUserComponent from '../components/DetailUserComponent';

class DetailUserContainer extends Component {

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

    componentDidMount(){
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        
        return (
            <div>
                <Container>
                    <BackHomeComponent />
                    <h1>Detail User </h1>
                    <DetailUserComponent/>
                </Container>
            </div>
        )
    }
}

export default connect()(DetailUserContainer);