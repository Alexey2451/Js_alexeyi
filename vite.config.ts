// Импортируем специальный плагин для работы с React-компонентами через SWC компилятор
import react from '@vitejs/plugin-react-swc';

// Вспомогательные функции для работы с путями и URL
import { fileURLToPath, URL } from 'node:url';

// Функция конфигурации для сборщика Vite
import { defineConfig } from 'vite';


// Экспортируем конфигурацию по умолчанию для Vite
export default defineConfig({
    // Подключаем необходимые плагины Vite
    plugins: [react()], // подключение React-плагина с использованием SWC-компилятора для быстрой сборки
    // Настройка путей для удобного импорта внутри проекта
    resolve: {
        // Определяем алиасы для сокращения путей при импорте файлов и модулей
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./Sources/', import.meta.url))
        },
    },

});