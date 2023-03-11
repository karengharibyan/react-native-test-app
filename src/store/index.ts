import {
  configureStore,
  combineReducers,
  AnyAction,
  Reducer,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

import {app,weather} from './reducers';

const appReducer = combineReducers({
  app,
  weather
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof appReducer>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
