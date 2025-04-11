import type { PropsWithChildren } from 'react';
import { BackgroundImage, type BackgroundImageProps, Container, Stack, Title } from '@mantine/core';

interface HeroProps extends BackgroundImageProps {
    title: string;
}

export const Hero = ({ title, children, ...props }: PropsWithChildren<HeroProps>) => {
    return (
        <BackgroundImage {...props}>
            <Container pt={80} pb={210}>
                <Stack gap={40}>
                    <Title c='white' fz={96}>
                        {title}
                    </Title>
                    {children}
                </Stack>
            </Container>
        </BackgroundImage>
    );
};
