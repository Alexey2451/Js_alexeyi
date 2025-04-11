import { API } from '@/shared/api';
import { baseApi } from '@/shared/api/base-api.ts';

import type { ProductDto } from '../api/dto';
import { ProductDtoSchema } from '../types';

export const ProductApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSales: build.query<ProductDto, void>({
            query: () => API.SALE,
            transformResponse: (res: unknown) => ProductDtoSchema.array().parse(res),
        }),
    }),
});

export const { useGetAllSalesQuery } = ProductApi;

export const productsApi = {
    getAllProducts: async () => {
        const response = await fetch(`${API.BASE_URL}${API.ALL_PRODUCTS}`, {
            method: 'GET',
        });

        return await response.json();
    },
    getProductById: async (id: number) => {
        const response = await fetch(`${API.BASE_URL}${API.PRODUCT_BY_ID(id)}`, {
            method: 'GET',
        });

        return await response.json();
    },
};
