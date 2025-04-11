import { Link } from 'react-router';
import { Button, Divider, Group, GroupProps, Title } from '@mantine/core';

interface TopProps extends GroupProps {
    title: string;
    href?: string;
    linkLabel?: string;
}

export const Top = ({ title, linkLabel, href, ...props }: TopProps) => {
    return (
        <Group gap={32} {...props}>
            <Title fz={64}>{title}</Title>
            {href && (
                <Divider
                    flex={1}
                    my='xs'
                    label={
                        <Button
                            px='md'
                            variant='default'
                            size='md'
                            radius='xs'
                            bg='white'
                            c='gray'
                            fw='400'
                            component={Link}
                            to={href}
                        >
                            {linkLabel}
                        </Button>
                    }
                    labelPosition='right'
                />
            )}
        </Group>
    );
};
