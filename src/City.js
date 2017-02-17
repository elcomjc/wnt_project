import { observable, computed, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';

class City {
  cityName = null;
  cityKey = '';
  @observable latitude = null;
  @observable longitude = null;
  @observable temperature = '';
  @observable time = '';
  @observable loading = false;

  constructor (cityName, cityKey, lat, lng) {
    this.cityName = cityName;
    this.cityKey = cityKey;
    this.latitude = lat;
    this.longitude = lng;
  }

  @action getDataFromApi () {
    this.loading = true;
    axios.get('http://localhost:5000/api/getDataByCityLatLng?city_key='+this.cityKey)
    .then(action(res => {
      this.time = (moment.unix(res.data.time).format('HH:mm a'));
      this.temperature = parseFloat((res.data.temperature - 32) / 1.8).toFixed(2);
      this.loading = false;
    }))
    .catch(function (error) {
      console.log(error);
      this.loading = false;
    });
  }

}

export default City;
