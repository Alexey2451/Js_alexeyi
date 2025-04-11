import { lazy } from 'react';

export const ProductPageLazy = lazy(() => import('./index.tsx'));
import { Box, Container } from '@mantine/core'; // UI компоненты контейнера и блока

import { AllProductsModel, ProductCard } from '@/entities/Product'; // Модель и компонент карточки товара
import { AddProductToCart } from '@/features/Add_cart'; // Компонент для добавления товара в корзину
import { useAppSelector } from '@/shared/lib/redux.ts'; // Хук для выбора состояния Redux
import { Contacts } from '@/components/Contacts'; // Виджет контактов
import { RootLayout } from '@/components/Layout'; // Базовый макет страницы

// Страница с описанием конкретного товара
export default function ProductPage() {
    const product = useAppSelector(AllProductsModel.selectors.selectCurrentProduct); // Получаем текущий выбранный товар из состояния Redux

    if (!product) return null; // Если товар не был найден, ничего не отображаем

    return (
        <RootLayout title={`${product.title}`}> {/* Макет страницы с заголовком товара */}
            <Container>
                <Box component='section' mt={116} mb={80}> {/* Основной блок с отступами */}
                    <ProductCard
                        {...product} // Передача всех данных товара в компонент карточки товара
                        addToCartSlot={<AddProductToCart product={product} />} // Слот для компонента добавления товара в корзину
                    />
                </Box>
                <Contacts /> {/* Блок контактной информации внизу страницы */}
            </Container>
        </RootLayout>
    );
}