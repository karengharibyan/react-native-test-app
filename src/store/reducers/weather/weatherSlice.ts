import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import weatherApi from './weatherApi';
import {IError, IWeatherState} from './entities';
import moment from 'moment';
import { getCache } from '../../../utils';

const cache = getCache()

const initialState: IWeatherState = {
  status: 'idle',
  error: undefined,
  weathers: undefined,
  currentWeather: undefined,
  history: []
};

export const getCurrentWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (q: string) => {
    const {data: currentWeather} = await weatherApi.getCurrentWeather(q);
    const {data: weathers} = await weatherApi.getWeatherFiveDays(currentWeather.coord.lat,currentWeather.coord.lon)
    return {
      currentWeather,
      weathers
    };
  },
);

export const getWeatherFiveDays = createAsyncThunk(
  'weather/getWeatherFiveDays',
  async (data: any) => {
    const response = await weatherApi.getWeatherFiveDays(data.lat,data.lng);
    return response;
  },
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state,{payload}) => {
      state.currentWeather = payload
    },
    setWeathers: (state,{payload}) => {
      state.weathers = payload
    },
    setHistory: (state,{payload}) => {
      state.history = payload;
    },
    addHistory: (state, { payload }) => {
      const data = {
        location: payload.currentWeather.name,
        date: moment().format('DD/MM/YYYY, hh:mm'),
        currentWeather: payload.currentWeather,
        weathers: payload.weathers
      }
      state.history.push(data);
      cache.set('histories',JSON.stringify(state.history))
    },
    removeHistory: (state, { payload }) => {
      state.history = state.history.filter((item,index) => index !== payload);
      cache.set('histories',JSON.stringify(state.history))
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCurrentWeather.pending, state => {
        state.status = 'loading';
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = undefined
        state.currentWeather = action.payload.currentWeather
        state.weathers = action.payload.weathers
        weatherSlice.caseReducers.addHistory(state,action)
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.currentWeather = undefined
        state.weathers = undefined
        state.error = action.error as IError;
      });

      builder
      .addCase(getWeatherFiveDays.pending, state => {
        state.status = 'loading';
      })
      .addCase(getWeatherFiveDays.fulfilled, (state, action) => {
        state.status = 'idle';
        state.error = undefined
        state.weathers = action.payload.data
      })
      .addCase(getWeatherFiveDays.rejected, (state, action) => {
        state.status = 'failed';
        state.currentWeather = undefined
        state.weathers = undefined
        state.error = action.error as IError;
      });
  },
});

export const {addHistory,setHistory,removeHistory,setWeathers,setCurrentWeather} = weatherSlice.actions

export default weatherSlice.reducer;
