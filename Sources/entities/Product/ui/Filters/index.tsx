import { useId } from 'react';
import { Box, Checkbox, Group, Select, Text, TextInput } from '@mantine/core';
import type { Action } from '@reduxjs/toolkit';

import { useAppDispatch } from '@/shared/lib/redux.ts';

interface FiltersProps {
    onSetPriceFrom: (state: number) => Action;
    onSetPriceTo: (state: number) => Action;
    onSetDiscountedProducts: () => Action;
    onSetSortState: (sort: string) => Action;
    isDiscounted: boolean;
    sortState: 'Asc' | 'Desc' | 'Default' | string;
    showDiscountPanel?: boolean;
}

export const Filters = ({
    showDiscountPanel = true,
    onSetSortState,
    onSetDiscountedProducts,
    onSetPriceTo,
    onSetPriceFrom,
    isDiscounted,
    sortState,
}: FiltersProps) => {
    const checkboxId = useId();
    const dispatch = useAppDispatch();

    return (
        <Box my={40} component='form'>
            <Group gap={40}>
                <Group gap='md'>
                    <Text fw='bold'>Price</Text>
                    <TextInput
                        onChange={(e) => dispatch(onSetPriceFrom(Number(e.target.value)))}
                        maw={112}
                        placeholder='from'
                    />
                    <TextInput
                        onChange={(e) => dispatch(onSetPriceTo(Number(e.target.value)))}
                        maw={112}
                        placeholder='to'
                    />
                </Group>
                <Checkbox.Group hidden={!showDiscountPanel} onClick={() => dispatch(onSetDiscountedProducts())}>
                    <Group>
                        <Text style={{ cursor: 'pointer' }} htmlFor={checkboxId} fw='bold' component='label'>
                            Discounted items
                        </Text>
                        <Checkbox.Indicator
                            style={{ cursor: 'pointer' }}
                            id={checkboxId}
                            checked={isDiscounted}
                            size='lg'
                            radius='xxs'
                        />
                    </Group>
                </Checkbox.Group>
                <Group>
                    <Text fw='bold'>Sorted</Text>
                    <Select
                        data={['Default', 'Asc', 'Desc']}
                        defaultValue={sortState}
                        onChange={(e) => dispatch(onSetSortState(e ?? 'Default'))}
                        allowDeselect={false}
                    />
                </Group>
            </Group>
        </Box>
    );
};
