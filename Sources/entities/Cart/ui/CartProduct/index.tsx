import { ActionIcon, Box, CloseIcon, Group, Image, Stack, Text, Title } from '@mantine/core';

import { CartProductsControls } from '../CartProductsControls';

interface CartProductProps {
    image: string;
    title: string;
    price: number;
    increment: number;
    setIncrement: VoidFunction;
    setDecrement: VoidFunction;
    removeAllProducts: VoidFunction;
    discont_price?: number;
}

export const CartProduct = ({
    title,
    image,
    increment,
    discont_price,
    price,
    setIncrement,
    setDecrement,
    removeAllProducts,
}: CartProductProps) => {
    return (
        <Box
            w='100%'
            maw={780}
            mih={180}
            style={{ overflow: 'hidden', border: '1px solid var(--mantine-color-gray-3)', borderRadius: 12 }}
        >
            <Group w='100%' wrap='nowrap'>
                <Box style={{ borderRight: '1px solid var(--mantine-color-gray-3)' }}>
                    <Image maw={200} mah={180} src={image} />
                </Box>
                <Stack gap={32} p={32} w='100%' flex={1}>
                    <Group gap={0} justify='space-between' w='100%'>
                        <Title fz={20}>{title}</Title>
                        <ActionIcon onClick={removeAllProducts} ml='auto' variant='transparent' c='black'>
                            <CloseIcon />
                        </ActionIcon>
                    </Group>
                    <Group gap={32}>
                        <CartProductsControls
                            increment={increment}
                            setIncrement={setIncrement}
                            setDecrement={setDecrement}
                        />
                        <Group align='baseline'>
                            <Text fz={40} lh={1} fw={600}>
                                ${discont_price ?? price}
                            </Text>
                            <Text c='gray' td='line-through' fz={20} hidden={!discont_price}>
                                ${price}
                            </Text>
                        </Group>
                    </Group>
                </Stack>
            </Group>
        </Box>
    );
};
