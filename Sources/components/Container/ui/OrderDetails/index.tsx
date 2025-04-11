import { Box, Group, Text, Title } from '@mantine/core';

import { getDeclinations } from '@/shared/lib/getDeclinations.ts';

interface OrderDetailsProps {
    count: number;
    total: number;
}

export const OrderDetails = ({ count, total }: OrderDetailsProps) => {
    return (
        <Box mb={32}>
            <Title mb={24} fz={40}>
                Order details
            </Title>
            <Text c='gray' fz={40} fw={500}>
                {getDeclinations({ count, one: 'item', few: 'items', many: 'items' })}
            </Text>
            <Group justify='space-between' align='baseline'>
                <Text c='gray' fz={40} fw={500}>
                    Total
                </Text>
                <Text fw={700} fz={64} lh={1}>
                    ${total.toFixed(2)}
                </Text>
            </Group>
        </Box>
    );
};
