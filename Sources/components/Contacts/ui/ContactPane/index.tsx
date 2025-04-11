import type { PropsWithChildren, ReactNode } from 'react';
import { Group, Paper, Text } from '@mantine/core';

interface ContactPaneProps {
    title?: string;
    description?: ReactNode;
}

export const ContactPane = ({ title, description, children }: PropsWithChildren<ContactPaneProps>) => {
    return (
        <Paper h='100%' p={32} bg='gray.1'>
            {title && (
                <Text mb={16} c='gray.7' fz={20}>
                    {title}
                </Text>
            )}
            {title && (
                <Text fw={600} lh={1} fz={40}>
                    {description}
                </Text>
            )}
            <Group>{children}</Group>
        </Paper>
    );
};
