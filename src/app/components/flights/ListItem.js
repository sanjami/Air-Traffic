import React, { Component } from 'react';

const ListItem = (props) => {
console.log(props.oneFlight)
    return (
       <li>
       {props.oneFlight.altitude}
       {props.oneFlight.direction}
       {props.oneFlight.flightNumber}
       </li>
    )
}

export default ListItem;