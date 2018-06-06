import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Image, Row, Table } from 'react-bootstrap';
import logo5 from '../../../images/logo5.jpeg';
import cockpit from '../../../images/cockpit.jpg';
import { Link } from 'react-router-dom'

const FlightInfo = (props) => {

    const { destinationAirport, logo, manufacturer, model, originAirport } = props.flight;
    let imageSrc = logo !== 'Unknown' ? `//logo.clearbit.com/${logo.split(" ").join("").toLowerCase()}.com` : logo5

    return (
        <Grid id="flightInfo">
            <Row className="title">
                <h1>Flight details</h1>
            </Row>
            <Row>
                <Col sm={6} md={4} >
                    <Image src={cockpit} alt="plane" className="planeImg"/>
                </Col>
                <Col sm={6} md={2}>
                    <Image src={imageSrc} alt={logo} responsive className="logo"/>
                </Col>
                <Col sm={12} md={6}>
                    <Table striped condensed hover id="table">
                        <tbody>
                            <tr>
                                <td>Airline company:</td>
                                <td>{logo}</td>
                            </tr>
                            <tr>
                                <td>Manufacturer:</td>
                                <td>{manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Model:</td>
                                <td>{model}</td>
                            </tr>
                            <tr>
                                <td>From:</td>
                                <td>{originAirport}</td>
                            </tr>
                            <tr>
                                <td>To:</td>
                                <td>{destinationAirport}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Link to='/flights' className="btn btn-primary" role="button" id="linkButton">Go back to flights list</Link>
            </Row>
        </Grid>
    )
}

FlightInfo.propTypes = {
    flight: PropTypes.object
}

export default FlightInfo;