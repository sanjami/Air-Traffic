class Flight {
    constructor(id, altitude, flightNumber, trak, manufacturer, model, originAirport, destinationAirport, logo){
    this.id = id;
    this.altitude = altitude;
    this.flightNumber = flightNumber;
    this.direction = (trak < 45 || trak > 135) ? 'E' : 'W'
    this.manufacturer = manufacturer;
    this.model = model;
    this.originAirport = originAirport;
    this.destinationAirport = destinationAirport;
    this.logo = logo;
    }
}

export default Flight;