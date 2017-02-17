import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import CityView from './CityView';
require('../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css');
require('./styles/app.css');

@observer
class App extends Component {
  render() {
    const store = this.props.appState;
    return (
      <div className="container">
        {
          store.cities.map(
            (city, idx) => <CityView city={ city } key={ idx } />
          )
        }
      </div>
    );
  }
};

export default App;
