import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryRTK} from '../baseQueryRTK';

export const authApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: baseQueryRTK,
  endpoints: builder => ({
    getData: builder.query({
      query: 'data',
    }),
  }),
});

export const {useGetDataQuery} = authApi;
