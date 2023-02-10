// @mui material components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Images


function Maps() {
  return (
    
    <div style={{  width: '120vh' }}>
        <MapContainer center={[-29.4131,  -66.8558]} zoom={7} scrollWheelZoom={false} style={{ height: '90vh'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[-29.4131,  -66.8558]}>
                    <Popup>
                        La Rioja Capital
                    </Popup>
                </Marker>
            </MapContainer>
    </div>
            
         
            
            
            
              
        
    
    );  
  
}

export default Maps;