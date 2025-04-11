import { isObject } from 'lodash-es';

import type { CategoryByIdDto, ProductDto } from '../api/dto';
import type { ProductsModelState } from './types';

const isCategoryApi = (value: unknown): value is CategoryByIdDto => {
    return isObject(value) && 'data' in value;
};

const selectIsDiscounted = <T>(state: ProductsModelState<T>) => state.isDiscounted;
const selectHasFilters = <T>(state: ProductsModelState<T>) => state.hasFilters;
const selectProducts = <T>(state: ProductsModelState<T>) => state.products;
const selectSortState = <T>(state: ProductsModelState<T>) => state.sortState;
const selectProductsWithDiscounts = <T extends CategoryByIdDto | ProductDto>(state: ProductsModelState<T>) =>
    (isCategoryApi(state.products) ? state.products?.data : (state.products as ProductDto))?.filter((p) =>
        Boolean(p.discont_price)
    );
const selectFilteredProducts = <T>(state: ProductsModelState<T>, onlySales?: boolean) => {
    let currentProduct: ProductDto = [];

    if (isCategoryApi(state.products)) {
        currentProduct = [...state.products.data];
    } else {
        currentProduct = state.products as ProductDto;
    }

    if (onlySales) {
        currentProduct = [...(state.salesProducts as ProductDto)];
    }

    if (!currentProduct) return isCategoryApi(state.products) ? state.products.data : state.products;

    if (state.isDiscounted) {
        currentProduct = currentProduct?.filter((product) => Number(product.discont_price) > 0);
    }

    if (state.priceFrom) {
        currentProduct = currentProduct.filter((product) => Number(product.price) >= (state.priceFrom ?? 0));
    }

    if (state.priceTo) {
        currentProduct = currentProduct.filter((product) => Number(product.price) <= (state.priceTo ?? 0));
    }

    if (state.sortState === 'Asc') {
        currentProduct = currentProduct.sort((a, b) => a.price - b.price);
    }

    if (state.sortState === 'Desc') {
        currentProduct = currentProduct.sort((a, b) => b.price - a.price);
    }

    return currentProduct;
};
const selectIsLoading = <T>(state: ProductsModelState<T>) => state.isLoading;
const selectIsIdle = <T>(state: ProductsModelState<T>) => state.isIdle;
const selectCurrentProduct = <T>(state: ProductsModelState<T>) => {
    return state.currentProduct?.[0];
};

export const selectors = {
    selectFilteredProducts,
    selectIsLoading,
    selectHasFilters,
    selectIsDiscounted,
    selectProductsWithDiscounts,
    selectSortState,
    selectProducts,
    selectIsIdle,
    selectCurrentProduct,
};
