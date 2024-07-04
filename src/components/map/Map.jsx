import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import CustomMarker from "./CustomMarker";

const Map = () => {
    const initialPosition = [40.4168, -3.7038];
    const markerPosition = [41.45152, 2.2081];

    return (
        <>
            <MapContainer
                center={initialPosition}
                zoom={6}
                style={{ height: "43.75rem", width: "100%", marginTop:"3.125rem" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <CustomMarker position={markerPosition} popupText="Santako" />
            </MapContainer>
        </>
    );
};

export default Map;
