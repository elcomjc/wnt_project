import React , { Component} from 'react';
import { observer } from 'mobx-react';

@observer
class CityView extends Component {
  render () {
    const city = this.props.city;
    let flagUrl = require("./assets/"+city.cityKey+".png");
    let termometerUrl = require("./assets/termometro.png");
    let relojUrl = require("./assets/reloj.png");
    let body = '';
    let footer = '';
    if(city.loading){
      body = (<div className="mask-loading">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>);
    }else if ((city.temperature === 'NaN' || city.temperature === '' || city.time === 'Invalid date' || city.time === '') && !city.loading ) {
      body = (<div className="box">
        <div className="content">
          <div className="left-side">
            <h3>No data!</h3>
          </div>
        </div>
      </div>);
      footer = (<div className="footer">
        <div className="left-side">
          <span>No data!</span>
        </div>
        <div className="right-side">
        </div>
      </div>);
    }else{
      body = (<div className="box">
        <div className="content">
          <div className="left-side">
            {city.temperature}

          </div>
          <div className="right-side">
            <img src={termometerUrl} />
          </div>
        </div>
      </div>);
      footer = (<div className="footer">
        <div className="left-side">
          <img src={relojUrl} />
        </div>
        <div className="right-side">
          {city.time}
        </div>
      </div>);
    }
    return (
      <div className="wnt-city-box">
        <div className="header">
          <div className="left-side">
            <h1>
              {city.cityName}
            </h1>
          </div>
          <div className="right-side">
            <img className="country-flag" src={flagUrl} />
          </div>
        </div>
        <div className="body">
          {body}
        </div>
        {footer}
      </div>
    )
  }
}

export default CityView;
