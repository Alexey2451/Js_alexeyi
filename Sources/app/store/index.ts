import { configureStore } from '@reduxjs/toolkit';

import { CartModel } from '@/entities/Cart';
import { AllProductsModel, categoriesApi, ProductModel, productsApi } from '@/entities/Product';
import { baseApi } from '@/shared/api/base-api.ts';

export const extraArgument = {
    categoriesApi,
    productsApi,
};

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [ProductModel.reducerPath]: ProductModel.reducer,
        [AllProductsModel.reducerPath]: AllProductsModel.reducer,
        [CartModel.reducerPath]: CartModel.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(baseApi.middleware),
});
