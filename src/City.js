import { observable, computed, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';

class City {
  cityName = null;
  cityKey = '';
  intervalReloadObj = null;
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
    var scope = this;
    scope.loading = true;
    axios.get(process.env.API_URL+'/getDataByCityLatLng?city_key='+this.cityKey)
    .then(action(res => {
      this.time = (moment.unix(res.data.time).format('HH:mm a'));
      this.temperature = parseFloat((res.data.temperature - 32) / 1.8).toFixed(2);
      scope.loading = false;
      clearInterval(scope.intervalReloadObj);
    }))
    .catch(function (error) {
      console.log(error.response.data.error);
      scope.loading = false;
      setInterval(scope.getDataFromApi(), 20000);
    });
  }

}

export default City;
