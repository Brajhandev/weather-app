
export const getLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const currentCoords = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      
      res(currentCoords)
    });
  });
};
