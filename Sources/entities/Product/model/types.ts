import type { Product } from '@/entities/Product';

export interface ProductsModelState<T> {
    isDiscounted: boolean;
    isLoading: boolean;
    isIdle: boolean;
    hasFilters: boolean;
    priceFrom: number | null;
    priceTo: number | null;
    sortState: 'Asc' | 'Desc' | 'Default' | string;
    products?: T | null;
    salesProducts?: T;
    filteredProducts?: T;
    isProductLoading?: boolean;
    currentProduct?: Product[];
}
