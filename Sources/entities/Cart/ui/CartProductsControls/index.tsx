import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import { ActionIcon, Group, Text } from '@mantine/core';

interface CartProductsControlsProps {
    increment: number;
    setIncrement: VoidFunction;
    setDecrement: VoidFunction;
}

export const CartProductsControls = ({ increment, setIncrement, setDecrement }: CartProductsControlsProps) => {
    return (
        <Group gap={0}>
            <ActionIcon
                variant='default'
                radius='xxs'
                c='gray'
                size='lg'
                onClick={() => (increment < 1 ? null : setDecrement())}
            >
                <MinusIcon width={16} />
            </ActionIcon>
            <Text px='lg'>{increment}</Text>
            <ActionIcon c='gray' size='lg' variant='default' radius='xxs' onClick={setIncrement}>
                <PlusIcon width={16} />
            </ActionIcon>
        </Group>
    );
};
