import { lazy } from 'react';

export const NotFoundPageLazy = lazy(() => import('./index.tsx'));
import { Link } from 'react-router'; // Ссылка для маршрутизации
import { Button, Container, Image, Stack, Text, Title } from '@mantine/core'; // UI-компоненты из Mantine

import { Contacts } from '@/components/Contacts'; // Блок контактов
import { RootLayout } from '@/components/Layout'; // Основной макет страницы

// Страница, отображаемая при ошибке 404 (страница не найдена)
export default function NotFoundPage() {
    return (
        <RootLayout title='404 | Not Found'> {/* Основной шаблон страницы с заголовком для страницы ошибки */}
            <Container my={80}> {/* Контейнер с вертикальными отступами */}
                <Stack m='auto' maw={690}> {/* Центрированный стек элементов с максимальной шириной */}
                    <Stack ta='center' gap={32} mb={32}> {/* Вложенный центрированный стек с отступами */}
                        <Image src='/images/404.webp' alt='Not Found' /> {/* Изображение ошибки 404 */}
                        <Title fz={64} lh='70px'> {/* Заголовок страницы */}
                            Page Not Found
                        </Title>
                        <Text c='gray' fw={500} fz={20}> {/* Описание ошибки */}
                            We’re sorry, the page you requested could not be found. <br /> Please go back to the
                            homepage.
                        </Text>
                    </Stack>
                    <Button size='xl' m='auto' component={Link} to='/'> {/* Кнопка возврата на главную страницу */}
                        Go home
                    </Button>
                </Stack>
            </Container>
            <Contacts /> {/* Блок контактов внизу страницы */}
        </RootLayout>
    );
}