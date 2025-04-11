import { Carousel } from '@mantine/carousel'; // компонент карусели из Mantine
import { Box, Center, Container, Loader } from '@mantine/core'; // UI-компоненты Mantine (контейнер, блоки, загрузчик)

import { ProductItem, useGetAllSalesQuery } from '@/entities/Product'; // компонент товара и запрос получения акций
import { Top } from '@/shared/ui'; // общий UI-компонент заголовка страницы или раздела

// Компонент для отображения товаров со скидками в виде карусели
export const Sales = () => {
    const { data: sales, isLoading } = useGetAllSalesQuery(); // Запрос скидочных товаров с API

    return (
        <Box component='section' mb={80}>
            <Container>
                {/* Компонент заголовка с опциональной ссылкой на все скидки */}
                <Top mb={40} title='Sale' href='/sale' linkLabel='All sales' />

                {/* Показать индикацию загрузки, пока данные не получены */}
                {isLoading && (
                    <Center>
                        <Loader />
                    </Center>
                )}

                {/* Карусель товаров скидочной категории, отображается если есть данные */}
                {sales && (
                    <Carousel
                        slideGap={32} // промежуток между слайдами
                        withControls={false} // скрыть стандартные кнопки управления каруселью
                        slideSize={{
                            xs: '100%', // на мобильных устройствах один элемент на экран
                            md: '50%',  // на средних экранах два элемента на экран
                            lg: '25%',  // на больших экранах четыре элемента
                        }}
                        height={422} // высота контейнера карусели
                        align='start' // выравнивание элементов по левому краю
                    >
                        {/* Перебираем и отображаем каждый товар в виде отдельного слайда карусели */}
                        {sales?.map((sale) => (
                            <Carousel.Slide key={sale.id}>
                                <ProductItem {...sale} />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                )}
            </Container>
        </Box>
    );
};