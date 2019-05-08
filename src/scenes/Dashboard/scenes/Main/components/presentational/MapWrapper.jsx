import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { getLocationsService } from '../../services/getlocations.service';
import Notifier, { openSnackbar } from '~/src/components/presentational/Notifier.jsx';
import Search from './Search';

class MapWrapper extends React.Component {

  state = {
    location: {
      lat: 44.8118091,
      lng: 20.409335799999997
    },
    zoom: 2,
    markers: []
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let updatedArray = this.state.markers;
      updatedArray.push([position.coords.latitude, position.coords.longitude]);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        zoom: 12,
        markers: updatedArray
      });
    });
    getLocationsService.getlocations()
      .then(
        result => {
          result.data.map(item => {
            let updatedArray = this.state.markers;
            updatedArray.push([item.lng, item.lat]);
            this.setState({
              markers: updatedArray
            });
          })
        }).catch(() => {
          openSnackbar('Error while processing patrol locations', 'error', { vertical: 'top', horizontal: 'right' });
        });
  }

  render() {
    const { location, zoom } = this.state;
    return (
      <React.Fragment>
        <Notifier />
        <Map center={location} zoom={zoom} style={{ width: '100%', height: 'calc(100% - 64px)' }}>
          <TileLayer
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          >
          </TileLayer>
          {this.state.markers.map((position, idx) =>
            <Marker key={`marker-${idx}`} position={position}>
              <Popup>
                <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
              </Popup>
            </Marker>
          )}
          <Search />
        </Map>
      </React.Fragment>
    );
  }
}

export default MapWrapper;