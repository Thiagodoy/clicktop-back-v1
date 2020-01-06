
const axios = require('axios');

class ClientGoogleMapsRest{

    constructor(){       
        this._url = 'https://maps.googleapis.com/maps/api/geocode/json';
        this._key = 'AIzaSyDWRr-8rg2rCtvQxlpaQNf6AKvDh10aMS4';
    }

    async getAddress(company){

        let tempUrl = `${this._url}?key=${this._key}&address=${company.address} ${company.address_number} ${company.city} ${company.state}`

        return await axios.get(tempUrl).then(response=> response.data.results).catch(error=>{
            console.log('Error ao buscar o endereço');
            return null;
        });
    }

}

module.exports = new ClientGoogleMapsRest();