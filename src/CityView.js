import React , { Component} from 'react';
import { observer } from 'mobx-react';

@observer
class CityView extends Component {
  render () {
    const city = this.props.city;
    return (
      <div className="wnt-city-box">
        <div className="header">
          <h1>{city.cityName}</h1>
        </div>
        <div className="body">
          <div className="box">
            <div className="content">
              <div className="left-side">
                {city.temperature}

              </div>
              <div className="right-side">
                <img src="./src/assets/termometro.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="left-side">
            <img src="./src/assets/reloj.png" />
          </div>
          <div className="right-side">
            {city.time}
          </div>
        </div>
      </div>
    )
  }
}

export default CityView;
