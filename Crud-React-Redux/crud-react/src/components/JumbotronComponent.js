import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {    
    return {
        title: state.person.title        
    };
};

class JumbotronComponent extends Component {

    render() {
        
        const { title } = this.props

        return (
            <div className='vh-30'>
                <Jumbotron fluid >
                    <Container >
                        <h3 className="display-5">{title}</h3>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <p className="lead">
                            <Button color='dark'>
                                <FontAwesomeIcon icon={faInfo} />
                    Learn More
                  </Button>
                        </p>
                    </Container>
                </Jumbotron>

            </div>
        );
    }
};

export default connect(mapStateToProps, null)(JumbotronComponent);
