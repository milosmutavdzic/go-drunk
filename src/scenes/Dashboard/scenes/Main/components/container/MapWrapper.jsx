import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Notifier from '~/src/components/presentational/Notifier.jsx';
import Vote from '../container/Vote.jsx';
import SetPatrol from '../container/SetPatrol.jsx';
import CustomizedMarker from '../presentational/CustomizedMarker.jsx';
import Loader from '~/src/components/presentational/Loader.jsx';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddLocation from '@material-ui/icons/AddLocation';
import { getlocationsActions } from '../../actions/getlocations.action.js';
import customMarkerIcon from '../../constants/icon.js';
import Search from './Search.jsx';

import './MapWrapper.css';


class MapWrapper extends React.Component {

  state = {
    location: null,
    isAddingMarkerEnabled: false,
    newMarker: null
  }

  enableAddingMarkers = () => {
    this.setState({
      isAddingMarkerEnabled: !this.state.isAddingMarkerEnabled
    });
  }

  addMarkerOnClick = e => {
    if(this.state.isAddingMarkerEnabled){
      this.setState({ ...this.state, newMarker: e.latlng, isAddingMarkerEnabled: false });
    }
  }
  addMarkerOnSearch = (latlng) => {
    this.setState({ ...this.state, newMarker: latlng });
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
    const { location, isAddingMarkerEnabled, newMarker } = this.state;
    const { loading, markers, classes } = this.props;
    if (!markers && loading !== false) {
      return (
        <Loader />
      );
    }
    else {
      return (
        <React.Fragment>
          <Notifier />
          <Map center={location ? location : markers[0]}
            zoom={12}
            className={isAddingMarkerEnabled ? 'map-with-cross-cursor' : 'map'}
            onClick={this.addMarkerOnClick}
          >
            <TileLayer
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            >
            </TileLayer>
            {markers.map((item, idx) =>
              <Marker key={`marker-${idx}`} position={[item.lat, item.lng]}>
                <Popup>
                  <Vote location_id={item.id} />
                </Popup>
              </Marker>
            )}

            {newMarker ?
              <CustomizedMarker position={newMarker}
                icon={customMarkerIcon}
              >
                <Popup >
                  <SetPatrol marker={newMarker} />
                </Popup>
              </CustomizedMarker>
              : null
            }

            <Fab variant="extended"
              aria-label="Delete"
              color="primary"
              disabled={ isAddingMarkerEnabled }
              onClick={ () => this.enableAddingMarkers()} 
              className={ classes.addPatrol }>
              <AddLocation className={ classes.extendedIcon } />
              ADD PATROL
            </Fab>
            <Search addMarker={ this.addMarkerOnSearch }/>
          </Map>
        </React.Fragment>
      );
    }
  }
}

MapWrapper.propTypes = {
  classes: PropTypes.object,
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

const styles = theme => ({
  addPatrol: {
    position: 'absolute',
    bottom: 2 * theme.spacing.unit,
    right: 2 * theme.spacing.unit,
    'z-index': 1000
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MapWrapper));