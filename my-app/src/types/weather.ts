export type displayWeather = {
  coord?: {
    lon?: number;
    lat?: number;
  };
  main?: {
    humidity?: number;
    temp?: number;
    temp_max?: number;
    temp_min?: number;
  };
  name?: string;
  dt?: number;
  sys?: {
    sunrise?: number;
    sunset?: number;
  };
};
