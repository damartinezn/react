import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Row, Col, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import swal from 'sweetalert';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { deleteUser } from '../actions/UserActions';

const mapStateToProps = (state) => {    
    return {
        getUsersList: state.person.getUsersList,
        errorUsersList: state.person.errorUsersList
    };
};

const TableComponent = (props) => {

    const handleClick = (dispatch, id ) =>{
        console.log('Eliminar usuario : ', id)
        swal({
            title: "Are you sure?",            
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUser(id))
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    const { SearchBar } = Search;

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true,
        headerStyle: () => {
            return { with: '1%' }
        }
    }, {
        dataField: 'name',
        text: ' Name',
        sort: true
    }, {
        dataField: 'lastname',
        text: 'Last Name',
        sort: true
    }, {
        dataField: 'age',
        text: 'Age',
        sort: true
    }, {
        dataField: 'ci',
        text: 'CI',
        sort: true
    }, {
        dataFiel: 'link',
        text: 'Action',
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={'detail/' + row.id}>
                        <Button color='dark' className='mr-0 btn-sm'>
                            <FontAwesomeIcon icon={faInfo} /> Detail
                        </Button>
                    </Link>
                    <Link to={'edit/' + row.id}>
                        <Button color='dark' className='mr-0 btn-sm'>
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </Button>
                    </Link>
                    <Button color='dark' className='mr-0 btn-sm' onClick={()=> handleClick(props.dispatch, row.id)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
                </div>
            )
        }

    }];

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    return (
        <div className='mb-5'>
            {props.getUsersList ? <ToolkitProvider
                bootstrap4 keyField='id'
                data={props.getUsersList}
                columns={columns}
                defaultSorted={defaultSorted}
                search>
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to={'create'}>
                                        <Button color='dark' className='mr-0 btn-sm'>
                                            <FontAwesomeIcon icon={faUserPlus} /> Create User
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className='float-right'>
                                        <SearchBar {...props.searchProps} placeholder='Search...' />
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable
                                {...props.baseProps} pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> : 
            <div className='text-center'> 
                { props.errorUsersList ? <h3>{props.errorUsersList}</h3>  : <Spinner color='dark'></Spinner> }
                
            </div>}

        </div>
    )
}

export default connect(mapStateToProps, null)(TableComponent);