import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurant } from '../pages/Home/Home';

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes',
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => '',
    }),
    getFood: builder.query<Restaurant, string>({
      query: (id) => id,
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetFoodQuery } = api;

export default api;
