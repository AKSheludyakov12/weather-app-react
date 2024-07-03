interface LocationData {
    latitude: number;
    longitude: number;
}


export const getLocation = (): Promise<LocationData> => {
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
                alert('Ошибка при получении геопозиции. Разрешите доступ к геоданным.');
          }
        );
      } else {
        alert('Геолокация недоступна');

      }
    });
  };