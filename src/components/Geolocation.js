import  { useEffect, useState } from 'react';
const Gelocation  = ()=>{
const [location, setLocation] =useState({
  latitude:"12.9715987",
  longitude:"77.5945627"
});
useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return location;
}
export default Gelocation