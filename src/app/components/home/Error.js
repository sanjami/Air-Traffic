import React from 'react';
import { Alert} from 'react-bootstrap';

const Error = () => {
    return (
        <Alert bsStyle="danger" className="alert">
            <h4>We are not able to provide service without your location</h4>
        </Alert>
    )
}

export default Error;