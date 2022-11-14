import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchBaseQuery} from '@reduxjs/toolkit/dist/query';
import {API_URL} from '../config';

export const baseQueryRTK = fetchBaseQuery({
  baseUrl: `${API_URL}`,
  prepareHeaders: async headers => {
    const accessToken = await AsyncStorage.getItem('access_token');
    headers.set('Authorization', `Bearer ${accessToken}`);
    return headers;
  },
});
