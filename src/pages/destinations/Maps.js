// @mui material components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Images


function Maps() {
  return (
    
    <div style={{  width: '120vh' }}>
        <MapContainer center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false} style={{ height: '90vh'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Son Konum
                    </Popup>
                </Marker>
            </MapContainer>
    </div>
            
         
            
            
            
              
        
    
    );  
  
}

export default Maps;