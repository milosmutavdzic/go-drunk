import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Notifier from '~/src/components/presentational/Notifier.jsx';
import Vote from '../container/Vote.jsx';
import Loader  from '~/src/components/presentational/Loader.jsx'
import { getlocationsActions } from '../../actions/getlocations.action.js';
import Search from './Search';

import './MapWrapper.css';

class MapWrapper extends React.Component {

  state = {
    location: null
  }
  componentDidMount() {
    this.props.getlocations();
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      });
    });
  }

  render() {
    const { location } = this.state;
    const { loading, markers } = this.props;
    if (!markers && loading !== false) {
      return (
        <Loader />
      );
    }
    else {
      return (
        <React.Fragment>
          <Notifier />
          <Map center={location ? location : markers[0]} zoom={12} className='map' >
            <TileLayer
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            >
            </TileLayer>
            {markers.map((item, idx) =>{
              console.log(item.id);
              return (<Marker key={`marker-${idx}`} position={[item.lng, item.lat]}>
                <Popup className='popup'>
                  <Vote location_id={ item.id }/>
                </Popup>
              </Marker>)}
            )}
            <Search />
          </Map>
        </React.Fragment>
      );
    }
  }
}

MapWrapper.propTypes = {
  getlocations: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  markers: PropTypes.array
}
const mapStateToProps = state => {
  return {
    loading: state.locations.loading,
    markers: state.locations.markers
  }
}
const mapDispatchToProps = {
  getlocations: (errorHandler) => getlocationsActions.getlocations(errorHandler)
}
export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);