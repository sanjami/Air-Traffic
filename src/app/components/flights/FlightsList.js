import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { Col, Row } from 'react-bootstrap';

const FlightList = (props) => { 

    return (
        <div id="list">
        <Row >
            <Col sm={3} xs={12} xsHidden>
            <h2>Direction</h2>
            </Col>
            <Col sm={3} xs={4}>
            <h2>Flight number</h2>
            </Col>
            <Col sm={3} xs={4}>
            <h2>Altitude</h2>
            </Col>
            <Col sm={3} xs={4}>
            <h2>Details</h2>
        </Col>
        </Row>
            {props.flights.map((flight) => {
                return (<div className="column" key={flight.id}>
                    <ListItem oneFlight={flight} />
                </div>)
            })}

        </div>
    )
}

FlightList.propTypes = {
    flights: PropTypes.array
}

export default FlightList;