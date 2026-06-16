import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
// This ensures the marker icon displays correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const Map = ({ height = '400px' }) => {
  // Lagos, Nigeria coordinates (you can adjust to specific office location)
  const position = [6.5244, 3.3792]; // Lagos coordinates
  const zoom = 12;

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height, width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">
                John Oyediran Olabisi Foundation
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Lagos, Nigeria
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
