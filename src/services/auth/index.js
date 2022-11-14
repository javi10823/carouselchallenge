import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://echo-serv.tbxnet.com/v1/mobile/',
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
