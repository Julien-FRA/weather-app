import axios from "axios";

export class WeatherClass {
  constructor(public lat: number, public long: number, public key: string) {
    this.lat = lat
    this.long = long
    this.key = key
  }

  async getWeather() {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.key}`;
    const response = axios
      .get(api)
      .then((res) => res.data)
      .catch((err) => console.error(err))
    return await response
  }
}
