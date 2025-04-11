import { lazy } from 'react';

export const CategoriesPageLazy = lazy(() => import('./index'));
import { Categories } from '@/components/Category'; // Виджет категорий товаров
import { Contacts } from '@/components/Contacts'; // Виджет контактов
import { RootLayout } from '@/components/Layout'; // Главный макет страницы

// Страница категорий товаров
export default function CategoriesPage() {
    return (
        <RootLayout title='Категории'> {/* Основной шаблон страницы с заголовком */}
            <Categories showAll /> {/* Вывод всех доступных категорий */}
            <Contacts /> {/* Отображение контактной информации */}
        </RootLayout>
    );
}