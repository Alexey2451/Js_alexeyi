import { lazy } from 'react';

export const CategoryPageLazy = lazy(() => import('./index.tsx'));

import { Container } from '@mantine/core'; // Контейнер для контента

import { CategoriesList, type CategoryByIdDto, type ProductDto, ProductModel } from '@/entities/Product'; // Модели категорий и товаров
import { CategoriesFilterBar } from '@/features/Cat_filters'; // Панель фильтрации товаров в категории
import { useAppSelector } from '@/shared/lib/redux'; // Хук для доступа к хранилищу Redux
import { PageLoader } from '@/shared/ui'; // Индикатор загрузки страницы
import { Contacts } from '@/components/Contacts'; // Блок контактов
import { RootLayout } from '@/components/Layout'; // Главный макет сайта

// Деструктуризация селекторов из модели товара для простоты использования
const { selectHasFilters, selectFilteredProducts, selectProducts, selectIsLoading } = ProductModel.selectors;

// Страница конкретной категории
export default function CategoryPage() {
    const showFiltered = useAppSelector(selectHasFilters); // Проверяем наличие активных фильтров
    const isLoading = useAppSelector(selectIsLoading); // Статус загрузки товаров категории

    const products = useAppSelector(selectProducts) as CategoryByIdDto; // Доступные товары в категории
    const filteredProducts = useAppSelector(selectFilteredProducts) as ProductDto; // Отфильтрованные товары в категории

    if (isLoading) return <PageLoader />; // Показываем индикатор загрузки
    if (!products) return; // Ничего не показываем, если товары не загружены

    return (
        <RootLayout title={`Category ${products?.category.title}`}> {/* Основной шаблон с динамическим заголовком категории */}
            <Container>
                <CategoriesList
                    title={products?.category.title} // Название выбранной категории
                    categories={showFiltered && filteredProducts ? filteredProducts : products?.data} // Отфильтрованный или обычный список товаров
                    filtersSlot={<CategoriesFilterBar />} // Слот с панелью фильтрации
                />
                <Contacts /> {/* Блок с контактами */}
            </Container>
        </RootLayout>
    );
}