import { isNumberLike } from '@mantine/core';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { ProductsModelState } from './types';

const setProductsIsDiscounted = <T>(state: ProductsModelState<T>) => {
    state.isDiscounted = !state.isDiscounted;
    if (state.isDiscounted) state.hasFilters = true;
};
const setPriceFrom = <T>(state: ProductsModelState<T>, { payload }: PayloadAction<number>) => {
    state.priceFrom = payload;
    if (isNumberLike(state.priceFrom)) state.hasFilters = true;
};
const setPriceTo = <T>(state: ProductsModelState<T>, { payload }: PayloadAction<number>) => {
    state.priceTo = payload;
    if (isNumberLike(state.priceTo)) state.hasFilters = true;
};
const setSortState = <T>(
    state: ProductsModelState<T>,
    { payload }: PayloadAction<'Asc' | 'Desc' | 'Default' | string>
) => {
    state.sortState = payload;
    if (state.sortState !== 'Default') state.hasFilters = true;
};

export const reducers = {
    setPriceFrom,
    setPriceTo,
    setSortState,
    setProductsIsDiscounted,
};
