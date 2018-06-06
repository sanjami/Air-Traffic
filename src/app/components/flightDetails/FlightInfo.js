import React from 'react';
import { Button, Col, Grid, Image, Row, Table } from 'react-bootstrap';
import plane1 from '../../../images/plane1.jpg';
import { Link } from 'react-router-dom'

const FlightInfo = (props) => {

    const { id, altitude, destinationAirport, flightNumber, logo, manufacturer, model, originAirport } = props.flight;
    let imageSrc = logo !== 'Unknown' ? `//logo.clearbit.com/${logo.split(" ").join("").toLowerCase()}.com` : plane1

    return (
        <Grid>
            <Row className="title">
                <h1>Flight details</h1>
            </Row>
            <Row>
                <Col sm={6} md={3} >
                    <Image src={plane1} alt="plane" responsive />
                </Col>
                <Col sm={6} md={3} className="logo">
                    <Image src={imageSrc} alt={logo} responsive />
                </Col>
                <Col sm={12} md={6}>
                    <Table striped bordered condensed hover>
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
                <Link to='/flights' class="btn btn-primary" bsSize="large" role="button" id="linkButton">Go back to flights list</Link>
            </Row>
        </Grid>
    )
}

export default FlightInfo;