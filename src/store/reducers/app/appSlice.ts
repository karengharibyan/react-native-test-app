import {createSlice} from '@reduxjs/toolkit';
import {IAppState} from './entities';

const initialState: IAppState = {
  status: 'idle',
  error: null,
};

export const authUserSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default authUserSlice.reducer;
