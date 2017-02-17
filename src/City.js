import { observable, computed, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';

class City {
  forecastKey = '11119f9315e37b19f6aaafa06ca009b6';
  cityName = null;
  @observable latitude = null;
  @observable longitude = null;
  @observable temperature = '';
  @observable time = '';

  constructor (cityName, lat, lng) {
    this.cityName = cityName;
    this.latitude = lat;
    this.longitude = lng;
  }

  @action getDataFromApi () {
    axios.get('https://api.darksky.net/forecast/'+this.forecastKey+'/'+this.latitude+','+this.longitude)
    .then(action(res => {
      this.time = (moment.unix(res.data.currently.time).format('HH:mm a'));
      this.temperature = parseFloat((res.data.currently.temperature - 32) / 1.8).toFixed(2);
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

}

export default City;
