// GoogleMapComponent.js
import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Link } from "react-router-dom";


const containerStyle = {
  width: "100%",
  height: "81.3vh",
};

const GoogleMapComponent = ({
  setloading,
  latitude,
  longitude,
  setlatitude,
  setlongitude,
  setcurrentLocation,
}) => {

const apiKey = import.meta.env.VITE_MAP_KEY;


  const [newLat, setnewLat] = useState(parseInt(latitude));
  const [newlong, setnewLong] = useState(parseInt(longitude));

  const center = {
    lat: newLat,
    lng: newlong,
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
    setloading(true);
  }, []);

  const getMapCenter = () => {
    if (map) {
      const center = map.getCenter();
      console.log(`Latitude: ${center.lat()}, Longitude: ${center.lng()}`);
      setlatitude(center.lat());
      setlongitude(center.lng());
      setcurrentLocation("Map");
    }
  };

  return (
    <div className="w-full h-screen relative ">
     
      <div className="w-full grid place-items-center">
      <img
        src="./src/assets/location.png"
        alt="pin"
        className="w-10 absolute z-10"
      />

        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            onLoad={onLoad}
          />
        </LoadScript>
      </div>
      <Link to="/" onClick={getMapCenter}>
        <div className="text-white bg-btnBlue w-32  px-4 py-2 rounded my-8">
          Get Weather
        </div>
      </Link>
    </div>
  );
};

export default GoogleMapComponent;
