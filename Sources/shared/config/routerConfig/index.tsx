
import { createBrowserRouter } from 'react-router'; // Создание маршрутизатора для навигации

// Компоненты страниц, загружаемые лениво для оптимизации производительности
import { AllProductsPageLazy } from '@/pages/All';
import { AllSalesPageLazy } from '@/pages/Sales';
import { CartPageLazy } from '@/pages/Cart';
import { CategoriesPageLazy } from '@/pages/Category';
import { CategoryPageLazy } from '@/pages/Category_1';
import { IndexPageLazy } from '@/pages/Index';
import { NotFoundPageLazy } from '@/pages/404';
import { ProductPageLazy } from '@/pages/Product/';

import { Loaders } from './loaders.ts'; // Функции предварительной загрузки данных для страниц

// Перечисление маршрутов приложения
export const AppRoutes = {
    INDEX: 'index',
    CATEGORIES: 'categories',
    CATEGORY: 'category',
    ALL_PRODUCTS: 'products',
    ALL_SALES: 'sales',
    CURRENT_PRODUCT: 'product',
    CART: 'cart',
    NOT_FOUND: 'notFound',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

// Объект соответствия маршрутов и URL-путей
const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/', // Главная страница
    [AppRoutes.CATEGORIES]: '/categories', // Страница списка категорий продуктов
    [AppRoutes.CATEGORY]: '/categories/:id', // Страница конкретной категории по идентификатору
    [AppRoutes.ALL_PRODUCTS]: '/products', // Страница всех продуктов
    [AppRoutes.ALL_SALES]: '/sales', // Страница всех скидок и акций
    [AppRoutes.CURRENT_PRODUCT]: '/product/:id', // Страница конкретного продукта по идентификатору
    [AppRoutes.CART]: '/cart', // Страница корзины
    [AppRoutes.NOT_FOUND]: '*', // Страница не найдена (404)
};

// Конфигурация маршрутизатора приложения с указанием путей, компонентов страниц и загрузчиков
// eslint-disable-next-line react-refresh/only-export-components
export const routerConfig = createBrowserRouter([
    {
        path: RouterPaths.index,
        Component: IndexPageLazy,
        loader: Loaders.index, // Загрузка данных для главной страницы
    },
    {
        path: RouterPaths.categories,
        Component: CategoriesPageLazy,
    },
    {
        path: RouterPaths.category,
        Component: CategoryPageLazy,
        loader: Loaders.category, // Загрузка данных о конкретной категории
    },
    {
        path: RouterPaths.products,
        Component: AllProductsPageLazy,
        loader: Loaders.products, // Загрузка данных обо всех продуктах
    },
    {
        path: RouterPaths.sales,
        Component: AllSalesPageLazy,
        loader: Loaders.products, // Загрузка данных о скидках и акциях (если используется общий загрузчик)
    },
    {
        path: RouterPaths.product,
        Component: ProductPageLazy,
        loader: Loaders.product, // Загрузка данных о конкретном продукте
    },
    {
        path: RouterPaths.cart,
        Component: CartPageLazy,
    },
    {
        path: RouterPaths.notFound,
        Component: NotFoundPageLazy,
    },
]);