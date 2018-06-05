import fetchJsonp from 'fetch-jsonp';
import Flight from '../entities/flight';

class DataServices {

    getFlights = () => {
        return fetchJsonp('http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=33.433638&lng=-112.008113&fDstL=0&fDstU=10')
            .then((response) => {
                return response.json()
            })
            .then(data =>  {
                return data.acList.map((flight) => {
                    return new Flight(flight.Id, flight.Alt, flight.Icao, flight.Trak, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op)
                })
            })
            .catch(error => error)
    }
}

export const dataServices = new DataServices();