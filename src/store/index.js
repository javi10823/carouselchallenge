import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {authApi} from '../services/auth';
import loginReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: () => getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
