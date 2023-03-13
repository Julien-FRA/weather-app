import doux from "../assets/img/doux.jpeg";
import chaud from "../assets/img/chaux.jpg";
import cloud from "../assets/img/cloud.jpg";
import pluie from "../assets/img/pluie.jpeg";
import neige from "../assets/img/neige.webp";

export const getCelsius = (temp: number | any) => {
  return Math.round(temp - 273.15);
};

export const getHour = (hour: number | any) => {
  const date = new Date(hour);
  return { hours: date.getHours(), minutes: date.getMinutes() };
};

export const getBackground = (temp: number | any) => {
  if (temp >= 20) {
    return chaud;
  }
  if (temp < 20 && temp >= 15) {
    return doux;
  }
  if (temp < 15 && temp >= 10) {
    return cloud;
  }
  if (temp < 10 && temp >= 0) {
    return pluie;
  }
  if (temp <= 0) {
    return neige;
  }
};

export const getZone = (zone: string | undefined) => {
  if (zone) {
    return zone;
  }
  return "Nom de ville inconnu";
};
