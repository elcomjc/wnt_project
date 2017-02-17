import mobx, { observable } from 'mobx';
import City from './City';

class AppState {

  @observable cities = [];

  constructor() {
    this.cities.push(new City('Santiago', -33.43783, -70.65045));
    this.cities.push(new City('Zurich', 47.376887, 8.541694));
    this.cities.push(new City('Auckland', -36.84846, 174.76333));
    this.cities.push(new City('Sydney', -33.865143, 151.209900));
    this.cities.push(new City('Londres', 51.507351, -0.127758));
    this.cities.push(new City('Georgia', 32.165622, -82.900075));
    mobx.autorun(() => {
      this.getData();
      // setTimeout(() => {
      //   this.getData();
      // },60000);
    });
  }

  getData () {
    this.cities.map((city) => {
      city.getDataFromApi();
    });
  }

}

export default AppState;
