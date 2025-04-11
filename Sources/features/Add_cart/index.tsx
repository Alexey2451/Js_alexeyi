import { useEffect, useState } from 'react';
import { Button, Group } from '@mantine/core';

import { CartModel, type CurrentCartProduct } from '@/entities/Cart';
import { CartProductsControls } from '@/entities/Cart/ui/CartProductsControls';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';

interface AddProductToCartProps {
    product: CurrentCartProduct;
}

export const AddProductToCart = ({ product }: AddProductToCartProps) => {
    const dispatch = useAppDispatch();
    const currentProductFromCart = useAppSelector((state) =>
        CartModel.selectors.selectCurrentProductFromCart(state, product.id)
    );
    const [increment, setIncrement] = useState(() => currentProductFromCart?.count ?? 0);

    useEffect(() => {
        setIncrement(currentProductFromCart?.count ?? 0);
    }, [product]);

    const onIncrement = () => setIncrement(() => increment + 1);
    const onDecrement = () => setIncrement(() => increment - 1);

    return (
        <Group my={32}>
            <CartProductsControls increment={increment} setIncrement={onIncrement} setDecrement={onDecrement} />
            <Button
                flex={1}
                maw={316}
                radius='xxs'
                onClick={() => dispatch(CartModel.actions.addProductToCart({ ...product, count: increment }))}
            >
                Add to Cart
            </Button>
        </Group>
    );
};
