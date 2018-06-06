import React from 'react';
import ListItem from './ListItem';

const FlightList = (props) => { 

    return (
        <div id="list">
            {props.flights.map((flight) => {
                return (<div className="column" key={flight.id}>
                    <ListItem oneFlight={flight} />
                </div>)
            })}

        </div>
    )
}

export default FlightList;