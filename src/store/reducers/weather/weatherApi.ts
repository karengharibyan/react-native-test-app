import {httpClient} from '../../../api/httpClient';

const getCurrentWeather = async (q: string) => {
  return await httpClient.get('/weather',{
    params: {
      q: q
    }
  })
};

const getWeatherFiveDays = async (lat: string,lng: string) => {
  return httpClient.get(`/forecast?lat=${lat}&lon=${lng}&cnt=10`)
}

const getGetGeocoding = async (q: string) => {
  return httpClient.get('/weather',{
    params: {
      q: q
    }
  })
}

export default {
  getCurrentWeather,
  getGetGeocoding,
  getWeatherFiveDays
};
