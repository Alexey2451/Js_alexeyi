import { BiLogoInstagramAlt, BiLogoWhatsapp } from 'react-icons/bi'; // Иконки социальных сетей
import { ActionIcon, Box, Container, Grid } from '@mantine/core'; // UI-компоненты mantine
import { useMediaQuery } from '@mantine/hooks'; // Хук для адаптивного дизайна
import { Top } from '@/shared/ui'; // Общий компонет заголовка страницы или секции
import { ContactPane } from './ui'; // Компонент для отображения контактной информации

// Компонент контактной информации
export const Contacts = () => {
    const isLarge = useMediaQuery('(min-width: 730px)'); // Определение размера экрана для адаптивности

    return (
        <Box component='section' mb={80}>
            <Container>
                {/* Общий заголовок для раздела контактной информации */}
                <Top mb={40} title='Contact' />

                {/* Сетка с контактными данными */}
                <Grid mb={32}>
                    {/* Блок с номером телефона */}
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane
                            title='Phone'
                            description={
                                <a style={{ color: 'currentcolor', textDecoration: 'none' }} href='tel:+74993506604'>
                                    +7 (499) 350-66-04
                                </a>
                            }
                        />
                    </Grid.Col>


                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane title='Socials'>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoInstagramAlt size={38} />
                            </ActionIcon>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoWhatsapp size={38} />
                            </ActionIcon>
                        </ContactPane>
                    </Grid.Col>

                    {/* Блок адреса компании */}
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane title='Address' description='Mira Avenue, 119, building 332, Moscow' />
                    </Grid.Col>

                    {/* Блок часов работы */}
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane title='Working Hours' description='24 hours a day' />
                    </Grid.Col>
                </Grid>

                {/* Интегрированная Яндекс.Карта с местоположением компании */}
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A9842ac539d50f62b9ac2226a477f87ca36ff6c639e20b5e275cca7b24ae9cf8b&amp;source=constructor"
                    width="1359"
                    height="500"
                    frameBorder="0"
                ></iframe>
            </Container>
        </Box>
    );
};