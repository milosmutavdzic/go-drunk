import { Component } from "react";
import PropTypes from 'prop-types';
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { withLeaflet } from "react-leaflet";

class Search extends Component {
  componentDidMount() {
    const { map } = this.props.leaflet;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);
    searchControl.on("results", function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        var popUpMessage = "To set patrol this location, first click on \"ADD PATROL\" button and then mark this location"
        results.addLayer(L.marker(data.results[i].latlng).bindPopup(popUpMessage));
      }
    });
  }
  render() {
    return null;
  }
}
Search.propTypes = {
  leaflet: PropTypes.object.isRequired,
};
//export default Search;
export default withLeaflet(Search);