import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default class BackHomeComponent extends Component {
    render() {
        return (
            <div>
                <Link to={'/'}>
                    <Button color='dark' className='mr-0 btn-sm'>
                        <FontAwesomeIcon icon={faArrowLeft} /> Atras
                    </Button>
                </Link>
            </div>
        )
    }
}
