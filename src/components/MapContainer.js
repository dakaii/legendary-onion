import GoogleMapReact from 'google-map-react';
import React from 'react';
import { secrets } from '../constants/secrets';
import { useHover } from '../hooks/useHover';

export const MapContainer = (props) => {
    const { center, zoom, points } = props;
    return (
        <div style={{ height: '80vh', width: '90%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: secrets.GOOGLE_MAPS_SECRET }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {points.map((place, i) => (
                    <Marker
                        key={i}
                        lat={place.latitude}
                        lng={place.longitude}
                        place={place}
                    />
                ))}
            </GoogleMapReact>
        </div>
    );
};

const InfoWindow = (props) => {
    const { place } = props;
    const infoWindowStyle = {
        position: 'relative',
		display: 'inline-block',
        bottom: 10,
        left: 15,
        backgroundColor: 'white',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
		fontSize: 10,
        padding: 2,
        zIndex: 100,
		borderRadius: 2,
    };

    return (
        <div style={infoWindowStyle}>
            <div style={{ display: 'grid' }}>
                <span>{place.title} </span> 
                {/* <span>Latitude: {place.latitude.toFixed(5)}</span>
                <span>Longitude: {place.longitude.toFixed(5)} </span> */}
            </div>
        </div>
    );
};

const Marker = ({ show, place }) => {
    const [hoverRef, isHovered] = useHover();
    const markerStyle = {
        border: '1px solid white',
        borderRadius: '50%',
        height: 10,
        width: 10,
        backgroundColor: show ? 'red' : 'blue',
        cursor: 'pointer',
        zIndex: 10,
    };

    return (
        <>
            <div style={markerStyle} ref={hoverRef} />
            {isHovered && <InfoWindow place={place} />}
        </>
    );
};
