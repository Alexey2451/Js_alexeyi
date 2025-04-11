import { LoaderFunctionArgs } from 'react-router';

import { store } from '@/app/store';
import { CategoriesApi, fetchProductById, fetchProducts, ProductApi } from '@/entities/Product';
import { fetchAllProducts } from '@/entities/Product/model/AllProductsModel.ts';

export const Loaders = {
    index: async () => {
        store.dispatch(CategoriesApi.util.prefetch('getAllCategories', undefined, {}));
        store.dispatch(ProductApi.util.prefetch('getAllSales', undefined, {}));
        return null;
    },
    categories: async () => {
        store.dispatch(CategoriesApi.util.prefetch('getAllCategories', undefined, {}));
        return null;
    },
    category: async ({ params }: LoaderFunctionArgs<{ params: { id: string } }>) => {
        store.dispatch(fetchProducts(Number(params.id)));
        return null;
    },
    products: async () => {
        store.dispatch(fetchAllProducts());
        return null;
    },
    product: async ({ params }: LoaderFunctionArgs<{ params: { id: string } }>) => {
        store.dispatch(fetchProductById(Number(params.id)));
        return null;
    },
};
