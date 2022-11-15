import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('Payload', action.payload);
      AsyncStorage.setItem('access_token', action.payload);
      state.isLogged = true;
      state.token = action.payload;
    },
  },
});

export const {login} = loginSlice.actions;

export default loginSlice.reducer;
