import { lazy } from 'react';

export const CartPageLazy = lazy(() => import('./index'));
import { Container } from '@mantine/core'; // Контейнер для выравнивания содержимого

import { CartContainer } from '@/components/Container'; // Корзина с товарами
import { Contacts } from '@/components/Contacts'; // Виджет контактов
import { RootLayout } from '@/components/Layout'; // Основной макет страницы

// Страница корзины
export default function CartPage() {
    return (
        <RootLayout title='Корзина'> {/* Основной макет с заголовком */}
            <Container mb={90}> {/* Контейнер с нижним отступом */}
                <CartContainer /> {/* Блок корзины */}
            </Container>
            <Contacts /> {/* Контакты */}
        </RootLayout>
    );
}