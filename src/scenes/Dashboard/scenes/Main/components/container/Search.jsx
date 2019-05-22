import { Component } from 'react';
import PropTypes from 'prop-types';
import * as ELG from 'esri-leaflet-geocoder';
import { withLeaflet } from 'react-leaflet';

class Search extends Component {

  componentDidMount() {
    const { map } = this.props.leaflet;
    const { addMarker } = this.props;
    const searchControl = new ELG.Geosearch().addTo(map);

    searchControl.on("results", data => {
      for (let i = data.results.length - 1; i >= 0; i--) {
        addMarker(data.results[i].latlng);
      }
    });
  }
  render() {
    return null;
  }
}
Search.propTypes = {
  leaflet: PropTypes.object.isRequired,
  addMarker: PropTypes.func.isRequired
};

export default withLeaflet(Search);