import Map from "react-map-gl/maplibre";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./activeFiresMap.css";
import CustomMarker from "./CustomMarker";

const ActiveFiresMap = () => {
    const initialPosition = [40.4168, -3.7038];
    const markerPosition = [41.45152, 2.2081];

    return (
        <>
            <Map
                
                initialViewState={{
                    longitude: -3.74922,
                    latitude: 40.463667,
                    zoom: 5.2,
                }}
                style={{ width: "100%", height: "43.75rem" }}
                mapStyle="https://api.maptiler.com/maps/streets/style.json?key=4pTaCtvDhfBTHCQEjVvR"
            />
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

export default ActiveFiresMap;
