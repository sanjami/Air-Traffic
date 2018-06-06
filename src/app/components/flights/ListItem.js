import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap';
import logo6 from '../../../images/logo6.png';

const ListItem = (props) => {

    const { flightNumber, altitude, direction } = props.oneFlight

    const setDirection = () => {
        if (direction == 'W') {
            return "left"
        }
        return "right"
    }

    return (
        <Row >
            <Col sm={3} xs={12}>
            <Image src={logo6} alt="logo" className={setDirection()}/>
            </Col>
            <Col sm={3} xs={4}>
            <h3>{flightNumber}</h3>
            </Col>
            <Col sm={3} xs={4}>
            <h3>{altitude}</h3>
            </Col>
            <Col sm={3} xs={4}>
            <Link to={`/flight/${flightNumber}`} className="btn btn-primary" role="button" id="detailsButton">Flight details</Link>
        </Col>
        </Row>
    )
}

export default ListItem;