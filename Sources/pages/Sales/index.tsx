import { lazy } from 'react';

export const AllSalesPageLazy = lazy(() => import('./index'));
import { Container } from '@mantine/core'; // Контейнер для контента
import { AllProductsList, AllProductsModel, type ProductDto } from '@/entities/Product'; // Модель товаров и список
import { AllProductsFilterBar } from '@/features/Filters'; // Фильтры товаров
import { useAppSelector } from '@/shared/lib/redux.ts'; // Хук Redux состояния
import { PageLoader } from '@/shared/ui'; // Индикатор загрузки
import { Contacts } from '@/components/Contacts'; // Блок контактов
import { RootLayout } from '@/components/Layout'; // Основной макет страницы

// Страница с уценёнными товарами
export default function AllSalesPage() {
    const isLoading = useAppSelector(AllProductsModel.selectors.selectIsLoading); // Статус загрузки данных
    const products = useAppSelector((state) =>
        AllProductsModel.selectors.selectFilteredProducts(state, true) // Получаем только уцененные товары
    ) as ProductDto;

    if (isLoading) return <PageLoader />; // Показать лоадер, пока данные загружаются
    if (!products) return null; // Если нет товаров, ничего не отображаем

    return (
        <RootLayout title='Уцененные товары'>
            <Container>
                <AllProductsList
                    title='Discounted Items'
                    products={products} // Отображаем уценённые товары
                    filtersSlot={<AllProductsFilterBar showDiscountPanel={false} />} // Панель фильтрации без блока скидок
                />
                <Contacts /> {/* Контакты */}
            </Container>
        </RootLayout>
    );
}