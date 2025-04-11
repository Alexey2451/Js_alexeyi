import { API } from '@/shared/api';
import { baseApi } from '@/shared/api/base-api.ts';

import { CategoryDtoSchema } from '../types';
import type { CategoriesDto, CategoryByIdDto, CategoryId } from './dto.ts';

export const CategoriesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCategories: build.query<CategoriesDto, void>({
            query: () => API.ALL_CATEGORIES,
            transformResponse: (res: unknown) => CategoryDtoSchema.array().parse(res),
        }),
        getCategoryProductsById: build.query<CategoryByIdDto, CategoryId>({
            query: (id) => API.CATEGORY_BY_ID(id),
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllCategoriesQuery, useGetCategoryProductsByIdQuery } = CategoriesApi;

export const categoriesApi = {
    getCategoryProductsById: async (id: number) => {
        const response = await fetch(`${API.BASE_URL}${API.CATEGORY_BY_ID(id)}`, {
            method: 'GET',
        });

        return await response.json();
    },
};
