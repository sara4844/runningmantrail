import React from 'react';
import logo from './logo.svg';
import mapboxgl from 'mapbox-gl';
import './App.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPREAD_KEY;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 126.6224,
      lat: 37.4993,
      zoom: 9.39
    };
  }
 
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/sraleroy/ck9ly7wfk11as1jqtc6iow364',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className='sidebarStyle'>
          <h3>Running Man</h3>
          <p>Running Man is an urban variety TV show. Use configurations below to filter Running Man's filmed locations</p>
          <div className='sidebarFilters'>
            <h4>Filter locations by: </h4>
            <div><span>Year: <i>insert dropdown</i></span> <span>Month: <i>insert dropdown</i></span></div>
            <br />
            <div>Member: <i>insert dropdown</i></div>
            <br />
            <div>Guest: <i>insert dropdown</i></div>
            <br />
            <div><span>Country: <i>insert dropdown</i></span></div>
            <br />
            <div><span>Province: <i>insert dropdown</i></span></div>
            <br />
            <div><span>Town: <i>insert dropdown</i></span></div>
          </div>
          <br />
        </div>
        <div className='sidebarBottomFixed'>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
