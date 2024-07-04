import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

const CustomMarker = ({ position, popupText }) => {
    const customIcon = new L.Icon({
        iconUrl: "/images/fire-marker.png",
        iconSize: [27, 30], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32],
    });
    
    return (
        <Marker
            position={position}
            icon={customIcon}
        >
            <Popup>{popupText}</Popup>
        </Marker>
    );
};

CustomMarker.propTypes = {
    position: PropTypes.array,
    popupText: PropTypes.string
}

export default CustomMarker;
