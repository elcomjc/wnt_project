import mobx, { observable } from 'mobx';
import axios from 'axios';
import City from './City';

class AppState {

  @observable cities = [];

  constructor() {
    this.cities.push(new City('Santiago (CL)', 'chile', -33.43783, -70.65045));
    this.cities.push(new City('Zurich (CH)', 'switzerland', 47.376887, 8.541694));
    this.cities.push(new City('Auckland (NZ)', 'new_zealand', -36.84846, 174.76333));
    this.cities.push(new City('Sydney (AU)', 'australia', -33.865143, 151.209900));
    this.cities.push(new City('Londres (UK)', 'england', 51.507351, -0.127758));
    this.cities.push(new City('Georgia (US)', 'united_states', 32.165622, -82.900075));
    mobx.autorun(() => {
      this.sendCitiesToRedis().then(() => {
        this.getData();
      });
      setTimeout(() => {
        this.getData();
      },120000);
    });
  }

  getData () {
    this.cities.map((city) => {
      city.getDataFromApi();
    });
  }

  sendCitiesToRedis () {
    var promises = [];
    this.cities.map((city) => {
      promises.push(axios.post('http://localhost:5000/api/cityLatLng',
                                {
                                  cityKey: city.cityKey,
                                  lat: city.latitude,
                                  lng: city.longitude
                                }));
    });
    return axios
      .all(promises)
      .then(function () {
        console.log('Cities saved in redis');
      }, function error(error) {
        console.log(error);
      });
  }

}

export default AppState;
