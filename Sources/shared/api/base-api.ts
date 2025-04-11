import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '@/shared/api/index.ts';

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API.BASE_URL }),
    endpoints: () => ({}),
});
