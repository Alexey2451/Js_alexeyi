import { Box, Button, Container, Group, Image, Paper, Stack, TextInput, Title } from '@mantine/core'; // UI-компоненты от Mantine
import { useForm } from '@mantine/form'; // Хук для управления формами от Mantine

// Реализация компонента формы для получения скидки на первый заказ
export const FirstOrderForm = () => {
    // Инициализация формы с начальными значениями и валидацией
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },

        // Валидация полей формы
        validate: {
            name: (value) => (value.length < 1 ? 'Required Field' : null),
            phone: (value) => (value.length < 1 ? 'Required Field' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <Box component='section' mb={80}>
            <Container>
                <Paper
                    radius='sm'
                    pt={32}
                    px={32}
                    style={{
                        background: 'linear-gradient(#0B710B, #339933)', // Градиентный зеленый фон
                    }}
                >
                    {/* Заголовок с информацией о скидке */}
                    <Title fz={64} c='white' mb='xl' ta='center'>
                        5% off on the first order
                    </Title>

                    {/* Группа элементов: изображение и форма */}
                    <Group gap={32}>
                        {/* Изображение с описанием акции */}
                        <Image maw={748} mah={360} src='/images/off_price_form_image@2x.webp' />

                        {/* Форма для заполнения пользовательских данных */}
                        <form
                            style={{ flex: '1' }}
                            onSubmit={form.onSubmit(
                                (values) => {
                                    // Тестовая обработка отправленных данных (вывод в консоль)
                                    // eslint-disable-next-line no-console
                                    console.log({ values });
                                },
                                (errors) => {
                                    // Тестовая обработка ошибок валидации (вывод в консоль)
                                    // eslint-disable-next-line no-console
                                    console.log(errors);
                                }
                            )}
                        >
                            {/* Стек элементов формы (поля ввода и кнопка) */}
                            <Stack gap={16}>
                                {/* Поле для ввода имени */}
                                <TextInput
                                    size='lg'
                                    placeholder='Name'
                                    key={form.key('name')}
                                    {...form.getInputProps('name')}
                                />
                                {/* Поле для ввода номера телефона */}
                                <TextInput
                                    size='lg'
                                    placeholder='Phone number'
                                    key={form.key('phone')}
                                    {...form.getInputProps('phone')}
                                />
                                {/* Поле для ввода электронной почты */}
                                <TextInput
                                    size='lg'
                                    placeholder='Email'
                                    key={form.key('email')}
                                    {...form.getInputProps('email')}
                                />
                                {/* Кнопка отправки формы */}
                                <Button type='submit' my={16} bg='white' c='black' size='lg'>
                                    Get a discount
                                </Button>
                            </Stack>
                        </form>
                    </Group>
                </Paper>
            </Container>
        </Box>
    );
};