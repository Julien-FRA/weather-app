import axios from "axios";
import { weatherCoords } from "../interfaces/weather";

const PATH = process.env.REACT_APP_API_PATH;

export const addCity = async (lat: string, long: string) => {
  await axios
    .post(
      `${PATH}/city/add`,
      {
        latitude: lat,
        longitude: long,
      },
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
