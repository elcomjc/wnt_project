import React , { Component} from 'react';
import { observer } from 'mobx-react';

@observer
class CityView extends Component {
  render () {
    const city = this.props.city;
    let flag_url = "./src/assets/"+city.cityKey+".png";
    let body = '';
    let footer = '';
    if(city.loading){
      body = (<div className="mask-loading">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>);
    }else{
      body = (<div className="box">
        <div className="content">
          <div className="left-side">
            {city.temperature}

          </div>
          <div className="right-side">
            <img src="./src/assets/termometro.png" />
          </div>
        </div>
      </div>);
      footer = (<div className="footer">
        <div className="left-side">
          <img src="./src/assets/reloj.png" />
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
            <img className="country-flag" src={flag_url} />
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
