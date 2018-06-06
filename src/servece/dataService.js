import fetchJsonp from 'fetch-jsonp';
import Flight from '../entities/flight';
import { range } from '../utils/constants'
class DataServices {

    getFlights = (position) => {


            return fetchJsonp(`https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${position.latitude}&lng=${position.longitude}&fDstL=0&fDstU=${range}`,
                {
                timeout: 10000,
              })
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    return data.acList.map((flight) => {
                        return new Flight(flight.Id, flight.Alt, flight.Icao, flight.Trak, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op)
                    })
                })
                .catch(error =>  { throw error })

    }

    getOneFlight = (Icao) => {

            return fetchJsonp(`https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?fIcoQ=${Icao}`,
            {
                timeout: 10000,
              })
                .then((response) => {
                    return response.json()
                })
                .then(data => {
                    let flight = data.acList[0]
                    return new Flight(flight.Id, flight.Alt, flight.Icao, flight.Trak, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op)

                })
                .catch(error => { throw error})

    }
}

export const dataServices = new DataServices();