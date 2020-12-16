import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'


class App extends React.Component {

  state = { lat: null, errorMessage: '' }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    else if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    else {
      return <Loader message="please accept location request" />
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

