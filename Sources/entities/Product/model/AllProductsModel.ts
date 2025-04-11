import type { Product } from '@/entities/Product';
import { createAppAsyncThunk, createSlice } from '@/shared/lib/redux.ts';

import type { ProductDto } from '../api/dto.ts';
import { reducers } from './reducers.ts';
import { selectors } from './selectors.ts';
import type { ProductsModelState } from './types.ts';

export const fetchProductById = createAppAsyncThunk<Product[], number>(
    'allProducts/fetchProductById',
    (id, thunkAPI) => {
        return thunkAPI.extra.productsApi.getProductById(id);
    }
);

const initialState: ProductsModelState<ProductDto> = {
    isLoading: false,
    isIdle: true,
    isDiscounted: false,
    hasFilters: false,
    products: null,
    filteredProducts: [],
    priceFrom: null,
    priceTo: null,
    sortState: 'Default',
    salesProducts: [],
    isProductLoading: false,
    currentProduct: undefined,
};

export const AllProductsModel = createSlice({
    name: 'allProducts',
    initialState,
    reducers: reducers,
    selectors: selectors,
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.salesProducts = action.payload.filter((product) => product.discont_price > 0);
            state.isLoading = false;
        });

        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
            state.isIdle = false;
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.isProductLoading = false;
            state.currentProduct = action.payload;
        });
        builder.addCase(fetchProductById.pending, (state) => {
            state.isProductLoading = true;
        });
    },
});

export const fetchAllProducts = createAppAsyncThunk<ProductDto, void>(
    'allProducts/fetchAllProducts',
    (_, thunkAPI) => {
        return thunkAPI.extra.productsApi.getAllProducts();
    },
    {
        condition(_, { getState }) {
            return AllProductsModel.selectors.selectIsIdle(getState());
        },
    }
);
