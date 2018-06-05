import React, { Component } from 'react';
import ListItem from './ListItem';

const FlightList = (props) => {
    
    return (
        <div>
            {props.flights.map((flight) => {
                return (<div className="column" key={flight.id}>
                    <ListItem oneFlight={flight} />
                </div>)
            })}

        </div>
    )
}

export default FlightList;