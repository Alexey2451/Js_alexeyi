import type { ReactNode } from 'react';
import { Box, Grid, Title } from '@mantine/core';

import type { Category } from '../../types';
import { ProductItem } from '../ProductItem';

interface CategoriesListProps {
    title: string;
    categories: Category[];
    filtersSlot?: ReactNode;
}

export const CategoriesList = ({ categories, title, filtersSlot }: CategoriesListProps) => {
    return (
        <Box mt={116} mb={80} component='section'>
            <Title mb={40} fz={64}>
                {title}
            </Title>
            <Box my={40}>{filtersSlot}</Box>
            <Grid>
                {categories.map((category) => (
                    <Grid.Col key={category.id} span={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <ProductItem {...category} />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
};
