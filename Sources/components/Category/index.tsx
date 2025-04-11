import { Box, Center, Container, Grid, Loader } from '@mantine/core'; // Mantine UI-компоненты

import { CategoryCard, useGetAllCategoriesQuery } from '@/entities/Product'; // Компонент карточки и хук запроса категорий
import { Top } from '@/shared/ui'; // Общий UI-компонент верхней части страницы

// Интерфейс пропсов компонента категорий
interface CategoriesProps {
    showAll?: boolean; // Параметр, определяющий отображать все категории или только часть
}

// Компонент для отображения категорий продуктов
export const Categories = ({ showAll = false }: CategoriesProps) => {
    const { data: categories, isLoading } = useGetAllCategoriesQuery(); // Запрос к API на получение данных категорий

    // Определение списка отображаемых категорий (все или первые 4)
    const renderCategories = showAll ? categories : categories?.slice(0, 4);

    // Параметры для компонента верхней части: если нет параметра "показать все", появляется ссылка на все категории
    const renderTitle = showAll
        ? {}
        : {
            href: '/categories',
            linkLabel: 'All categories',
        };

    return (
        <Box component='section' mb={80} mt={116}>
            <Container>
                {/* Верхняя часть с заголовком и опциональной ссылкой на список всех категорий */}
                <Top mb={40} title='Categories' {...renderTitle} />

                {/* Отображение загрузчика во время загрузки данных */}
                {isLoading && (
                    <Center>
                        <Loader />
                    </Center>
                )}

                {/* Сетка категорий, скрывается, если нет данных */}
                <Grid hidden={!renderCategories} grow mih={392}>
                    {renderCategories?.map((category: { title?: string; image?: string; id?: number }) => (
                        <Grid.Col
                            key={category.id}
                            span={{
                                xs: 12, // 100% ширина сетки на мобильных устройствах
                                md: 4,  // Треть ширины на планшетах и средних экранах
                                lg: 1,  // Равномерно занимает доступное пространство на больших экранах
                            }}
                        >
                            {/* Карточка категории с изображением и названием */}
                            <CategoryCard category={category.title} imageSrc={category.image} id={category.id} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};