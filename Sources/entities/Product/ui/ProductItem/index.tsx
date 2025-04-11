import { Link } from 'react-router';
import { Badge, Card, Group, Image, Text } from '@mantine/core';

import { calculateDiscount } from '@/shared/lib';

import type { Product } from '../../types';

type ProductItemProps = Partial<Product>;

export const ProductItem = ({ id, image, title, price, discont_price }: ProductItemProps) => {
    const discount = calculateDiscount({
        price: price ?? 0,
        discountPrice: discont_price ?? 0,
    });

    return (
        <Card h='100%' component={Link} to={`/product/${id}`} shadow='sm' padding='lg' radius='md' withBorder>
            <Card.Section pos='relative'>
                {discount ? (
                    <Badge radius='xs' miw={68} mih={34} pos='absolute' top={16} right={16}>
                        <Text fw='bold' fz={20}>
                            -{discount}%
                        </Text>
                    </Badge>
                ) : null}
                <Image src={image} height={284} alt={title} />
            </Card.Section>

            <Group justify='space-between' mt='md' mb='md'>
                <Text lineClamp={1} fw={500}>
                    {title}
                </Text>
            </Group>

            <Group align='end'>
                {discont_price && (
                    <Text fz={40} lh={1}>
                        ${discont_price}
                    </Text>
                )}
                <Text
                    fw={discont_price ? 400 : 500}
                    fz={discont_price ? 20 : 40}
                    lh={1}
                    c={discont_price ? 'gray' : 'black'}
                    td={discont_price ? 'line-through' : ''}
                >
                    ${price}
                </Text>
            </Group>
        </Card>
    );
};
