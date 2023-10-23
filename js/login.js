// URL de la API
const apiUrl = "https://api.tutiempo.net/json/?lan=es&apid=zwDX4azaz4X4Xqs&ll=-24.7829,-65.4126";

// Realizar una solicitud GET a la API utilizando fetch
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Acceder a los datos de Salta
    const saltaData = data.locality;

    // Acceder a los datos de hoy
    const today = data.day1;

    // Acceder a los datos de mañana
    const tomorrow = data.day2;

    // Mostrar los datos en la consola
    console.log("Datos de Salta, Argentina:");
    console.log("Localidad:", saltaData.name);
    console.log("País:", saltaData.country);
    console.log("Hoy (2023-10-22):");
    console.log("Temperatura Máxima:", today.temperature_max + "°C");
    console.log("Temperatura Mínima:", today.temperature_min + "°C");
    console.log("Condición:", today.text);
    console.log("Humedad:", today.humidity + "%");
    console.log("Viento:", today.wind + " km/h desde " + today.wind_direction);

    console.log("Mañana (2023-10-23):");
    console.log("Temperatura Máxima:", tomorrow.temperature_max + "°C");
    console.log("Temperatura Mínima:", tomorrow.temperature_min + "°C");
    console.log("Condición:", tomorrow.text);
    console.log("Humedad:", tomorrow.humidity + "%");
    console.log("Viento:", tomorrow.wind + " km/h desde " + tomorrow.wind_direction);
  })
  .catch(error => {
    console.error("Hubo un error al obtener los datos:", error);
  });
