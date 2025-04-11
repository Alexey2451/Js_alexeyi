import { lazy } from 'react';

export const IndexPageLazy = lazy(() => import('./index'));
import { Categories } from '@/components/Category'; // Виджет категорий товаров
import { Contacts } from '@/components/Contacts'; // Блок контактов
import { FirstOrderForm } from '@/components/Order'; // Форма для первого заказа
import { IndexHero } from '@/components/Index'; // Баннер или приветственный блок на главной странице
import { RootLayout } from '@/components/Layout'; // Основной макет страницы
import { Sales } from '@/components/Sales'; // Блок со скидками и акциями

// Главная страница сайта
export default function IndexPage() {
    return (
        <RootLayout title='Главная'> {/* Устанавливаем заголовок страницы */}
            <IndexHero /> {/* Приветственный блок страницы */}
            <Categories /> {/* Блок категорий */}
            <FirstOrderForm /> {/* Форма оформления первого заказа */}
            <Sales /> {/* Блок акций и скидок */}
            <Contacts /> {/* Контактная информация */}
        </RootLayout>
    );
}