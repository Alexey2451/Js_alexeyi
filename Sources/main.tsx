import { StrictMode } from 'react'; // Для поиска потенциальных проблем в React
import { createRoot } from 'react-dom/client'; // Для инициализации React-приложения
import { Provider } from 'react-redux'; // Связывание Redux и React

import { ErrorBoundary } from '@/app/providers/ErrorBoundary'; // Обработка ошибок в компонентах
import { AppRouter } from '@/app/providers/Router/ui'; // Управление маршрутизацией
import { ThemeProvider } from '@/app/providers/ThemeProvider'; // Темизация приложения
import { store } from '@/app/store'; // Redux-хранилище состояния приложения

// Создание корня приложения и монтирование в элемент с id "root"
const root = createRoot(document.getElementById('root') as HTMLElement);

// Рендер React-приложения с необходимыми провайдерами
root.render(
    <StrictMode>
        <Provider store={store}> {/* Предоставляем Redux-хранилище */}
            <ThemeProvider> {/* Темы и стили */}
                <ErrorBoundary> {/* Ловим ошибки */}
                    <AppRouter /> {/* Маршрутизация */}
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </StrictMode>
);