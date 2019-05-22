import L from 'leaflet';

const customMarkerIcon = L.icon({
    iconUrl: './src/static/img/marker.svg',
    iconSize: [44, 45],
    iconAnchor: [22, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default customMarkerIcon;