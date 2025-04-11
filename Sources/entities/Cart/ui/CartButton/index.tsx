import { Link } from 'react-router';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Indicator } from '@mantine/core';

import s from './CartButton.module.css';

interface CartButtonProps {
    counter: number;
}

export const CartButton = ({ counter = 0 }: CartButtonProps) => {
    return (
        <Indicator disabled={counter === 0} label={counter} size='lg' inline>
            <Link className={s.btn} to='/cart'>
                <ShoppingBagIcon />
            </Link>
        </Indicator>
    );
};
