import { type ReactNode, useEffect, useState } from 'react';
import { Box, Grid, Pagination, Title } from '@mantine/core';

import { ProductItem } from '@/entities/Product';
import { chunk } from '@/shared/lib/chunk.ts';

import type { Product } from '../../types';

interface AllProductsListProps {
    title: string;
    products: Product[];
    filtersSlot?: ReactNode;
}

export const AllProductsList = ({ title, products, filtersSlot }: AllProductsListProps) => {
    const data = chunk(products, 6);
    const [activePage, setPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState(() => data[0]);

    useEffect(() => {
        setPage(1);
        setCurrentProducts(() => data[0]);
    }, [products]);

    useEffect(() => {
        setCurrentProducts(() => data[activePage - 1]);
    }, [activePage]);

    return (
        <Box mt={116} mb={80} component='section'>
            <Title>{title}</Title>
            <Box my={40}>{filtersSlot}</Box>
            <Grid>
                {currentProducts?.map((product) => (
                    <Grid.Col key={product.id} span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <ProductItem {...product} />
                    </Grid.Col>
                ))}
            </Grid>
            <Pagination total={products?.length / 6} value={activePage} onChange={setPage} mt='sm' />
        </Box>
    );
};
