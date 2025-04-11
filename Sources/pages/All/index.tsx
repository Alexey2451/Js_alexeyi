import { lazy } from 'react';

export const AllProductsPageLazy = lazy(() => import('./index'));

import { Container } from '@mantine/core'; // Контейнерное оформление

import { AllProductsList, AllProductsModel, type ProductDto } from '@/entities/Product'; // Список товаров и модель данных
import { AllProductsFilterBar } from '@/features/Filters'; // Блок фильтрации товаров
import { useAppSelector } from '@/shared/lib/redux.ts'; // Redux-хук получения состояния
import { PageLoader } from '@/shared/ui'; // Индикатор загрузки
import { Contacts } from '@/components/Contacts'; // Виджет контактов
import { RootLayout } from '@/components/Layout'; // Основной лейаут страницы

// Селекторы состояния для списка товаров
const { selectHasFilters, selectProducts, selectFilteredProducts, selectIsLoading } = AllProductsModel.selectors;

// Страница со списком всех товаров
export default function AllProductsPage() {
    const isLoading = useAppSelector(selectIsLoading); // Признак загрузки
    const showFiltered = useAppSelector(selectHasFilters); // Наличие фильтров

    const products = useAppSelector(selectProducts) as ProductDto; // Все товары
    const filteredProducts = useAppSelector(selectFilteredProducts) as ProductDto; // Отфильтрованные товары

    if (isLoading) return <PageLoader />; // Загрузка

    if (!products) return; // Если нет товаров - ничего не отображаем

    return (
        <RootLayout title='Все товары'>
            <Container>
                <AllProductsList
                    title='All Products'
                    products={showFiltered && filteredProducts ? filteredProducts : products} // Показ списка по фильтру или всех товаров
                    filtersSlot={<AllProductsFilterBar />} // Бар с фильтрами товаров
                />
                <Contacts /> {/* Контакты */}
            </Container>
        </RootLayout>
    );
}