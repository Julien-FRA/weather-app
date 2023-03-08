export const getWeather = async (lat: number, long: number, key: string) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${key}`;
  console.log(api);
  await fetch(api, {
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
    mode: 'no-cors'
  })
  .then(res => console.log(res))
  .catch(err => {
    console.log(err);
  })
}