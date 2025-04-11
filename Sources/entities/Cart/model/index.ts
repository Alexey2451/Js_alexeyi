import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Cart, CurrentCartProduct } from '../types';

const initialState: Cart = {
    total: 0,
    products: [],
};

export const CartModel = createSlice({
    name: 'cartModel',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CurrentCartProduct>) => {
            const index = state.products.findIndex((el) => el.id === action.payload.id);

            if (index === -1) {
                state.products.push({
                    ...action.payload,
                    count: action.payload.count ?? 0,
                });
            } else {
                state.products[index] = { ...action.payload, count: action.payload.count };
            }

            state.total = (action.payload.count ?? 1) * (action.payload.discont_price ?? action.payload.price);
        },
        removeCurrentProduct: (state, action: PayloadAction<number>) => {
            const currentProduct = state.products.find((el) => el.id === action.payload);

            if (currentProduct) {
                state.total -= currentProduct.discont_price ?? currentProduct.price;
            }

            const index = state.products.findIndex((el) => el.id === action.payload);

            state.products[index].count = (state.products[index].count ?? 0) - 1;
            if (state.products[index].count < 1) {
                state.products = state.products.filter((product) => product.id !== action.payload);
            }
        },
        removeAllSameProductsFromCart: (state, action: PayloadAction<number>) => {
            const currentProduct = state.products.find((el) => el.id === action.payload);

            if (currentProduct) {
                state.total -= (currentProduct.discont_price ?? currentProduct.price) * (currentProduct.count ?? 1);
            }

            state.products = state.products.filter((product) => product.id !== action.payload);
        },
    },
    selectors: {
        selectCartProducts: (state) => state.products,
        selectCartCount: (state) => state.products.reduce((acc, product) => acc + (product.count ?? 0), 0),
        selectCartTotalPrice: (state) => state.total,
        selectCurrentProductFromCart: (state, action: number) => state.products.find((el) => el.id === action),
    },
});
