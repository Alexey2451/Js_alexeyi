import { Filters, ProductModel } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/redux.ts';

export const CategoriesFilterBar = () => {
    const { selectIsDiscounted, selectSortState } = ProductModel.selectors;
    const { setProductsIsDiscounted, setPriceTo, setPriceFrom, setSortState } = ProductModel.actions;

    const isDiscounted = useAppSelector(selectIsDiscounted);
    const sortState = useAppSelector(selectSortState);

    return (
        <Filters
            sortState={sortState}
            isDiscounted={isDiscounted}
            onSetDiscountedProducts={setProductsIsDiscounted}
            onSetSortState={setSortState}
            onSetPriceFrom={setPriceFrom}
            onSetPriceTo={setPriceTo}
        />
    );
};
