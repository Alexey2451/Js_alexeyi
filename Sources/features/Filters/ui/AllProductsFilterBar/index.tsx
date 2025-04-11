import { AllProductsModel, Filters } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/redux.ts';

interface AllProductsFilterBarProps {
    showDiscountPanel?: boolean;
}

export const AllProductsFilterBar = ({ showDiscountPanel = true }: AllProductsFilterBarProps) => {
    const { selectIsDiscounted, selectSortState } = AllProductsModel.selectors;
    const { setProductsIsDiscounted, setPriceTo, setPriceFrom, setSortState } = AllProductsModel.actions;

    const isDiscounted = useAppSelector(selectIsDiscounted);
    const sortState = useAppSelector(selectSortState);

    return (
        <Filters
            showDiscountPanel={showDiscountPanel}
            sortState={sortState}
            isDiscounted={isDiscounted}
            onSetDiscountedProducts={setProductsIsDiscounted}
            onSetSortState={setSortState}
            onSetPriceFrom={setPriceFrom}
            onSetPriceTo={setPriceTo}
        />
    );
};
