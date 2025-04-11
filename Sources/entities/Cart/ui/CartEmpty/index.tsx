import { Link } from 'react-router';
import { Button, Stack, Text } from '@mantine/core';

export const CartEmpty = () => (
    <Stack gap={32} w='fit-content'>
        <Text fz={20} fw={500}>
            Looks like you have no items in your basket currently.
        </Text>
        <Button w='fit-content' size='lg' bg='green.8' radius='xs' component={Link} to='/'>
            Continue Shopping
        </Button>
    </Stack>
);
