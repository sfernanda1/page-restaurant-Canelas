import React, { useEffect, useRef } from 'react';

function Map() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -8.177089, lng: -34.924045 },
      zoom: 20,
    });
  }, []);
  return <div ref={mapRef} style={{ width: 400, height: 200}}></div>;
}

export default Map;