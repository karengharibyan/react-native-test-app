import { Clouds, Coord, Main, Rain, Sys, Weather, Wind } from "../../../types";

export interface ICurrentWeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ISearchHistoryItem {
  location: string,
  date: string,
  currentWeather?: null | Weather;
  weathers?: {
    list: Weather[]
  };
}
export interface IWeatherState {
  weathers?: {
    list: Weather[]
  };
  currentWeather?: null | Weather;
  history: ISearchHistoryItem[];
  status: 'idle' | 'loading' | 'failed';
  error?: IError;
}

export interface IError {
  code: string
  message: string
  name: string
}
