import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import CustomMarker from "./CustomMarker";
import useApi from "../../services/useApi";

const Map = () => {
    const key = "beb49845fd6ab54e4ba92e4c0ab2fe8f";
    const url = `https://firms.modaps.eosdis.nasa.gov/api/country/csv/${key}/VIIRS_SNPP_NRT/ESP/1/${getDate()}`;
    const initialPosition = [40.4168, -3.7038];
    const data = useApi(url, "csv");

    if (data == null) {
        return <div className="loading"><p>Loading...</p></div>;
    }

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
    }

    return (
            <section className="map-container">
                <MapContainer
                    center={initialPosition}
                    zoom={6}
                    style={{
                        height: "43.75rem",
                        width: "100%",
                    }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {Object.values(data).map((data, i) => (
                        <CustomMarker
                            key={i}
                            position={[data.latitude, data.longitude]}
                            popupText={`${data.latitude}, ${data.longitude}`}
                        />
                    ))}
                </MapContainer>
            </section>
    );
};

export default Map;
