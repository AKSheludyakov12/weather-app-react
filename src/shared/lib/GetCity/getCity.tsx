interface LocationData {
    latitude: number;
    longitude: number;
}


export const getLocation = ():Promise<LocationData> => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                error => {
                    console.error(error);
                    reject(error);
                }
            );
        } else {
            reject(new Error('Геолокация недоступна'));
        }
    });
  };
 