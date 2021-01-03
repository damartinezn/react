import React from 'react'
import { connect } from 'react-redux'
import { Card, CardTitle, CardText, Spinner } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        getUserDetail: state.person.getUserDetail,
        errorUserDetail: state.person.errorUserDetail
    };
};


const DetailUserComponent = (props) => {
    return (
        <div className='text-center justify-content-center d-flex'>
            {props.getUserDetail ?
                <Card sm='1' className='mb-5 w-50'>
                    <Card body>
                        <CardTitle><h1>{props.getUserDetail.name} {props.getUserDetail.lastname}</h1></CardTitle>
                        <CardText>
                            Edad : {props.getUserDetail.age}
                        </CardText>
                        <CardText>
                            C.I. : {props.getUserDetail.ci}
                        </CardText>
                    </Card>
                </Card> :
                <div className='text-center'>
                    {props.errorUserDetail ? <h3>{props.errorUserDetail}</h3> : <Spinner color='dark'></Spinner>}

                </div>
            }

        </div>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent);
