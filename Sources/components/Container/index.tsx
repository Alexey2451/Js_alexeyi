import { Box, Button, Group, Paper, Stack, TextInput } from '@mantine/core'; // Mantine-компоненты
import { useForm } from '@mantine/form'; // Хук для работы с формами
import { useDisclosure } from '@mantine/hooks'; // Хук для управления модальными окнами и раскрывающимися элементами

import { CartEmpty, CartModel, CartProduct } from '@/entities/Cart'; // Модель и компоненты корзины
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts'; // Redux хуки состояния приложения
import { Top } from '@/shared/ui'; // Верхний навигационный компонент

import { OrderDetails, SuccessModal } from './ui'; // Дополнительные UI-компоненты для оформления заказа и модального окна успеха

// Компонент-контейнер для корзины интернет-магазина
export const CartContainer = () => {
    const dispatch = useAppDispatch(); // Redux dispatch-функция для отправки экшенов
    const products = useAppSelector(CartModel.selectors.selectCartProducts); // Товары в корзине
    const count = useAppSelector(CartModel.selectors.selectCartCount); // Общее количество товаров в корзине
    const total = useAppSelector(CartModel.selectors.selectCartTotalPrice); // Общая стоимость товаров в корзине

    const [opened, { open, close }] = useDisclosure(false); // Состояние модального окна успешного заказа

    // Форма оформления заказа с валидацией полей
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },
        validate: {
            name: (value) => (value.length < 1 ? 'Required Field' : null),
            phone: (value) => (value.length < 1 ? 'Required Field' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <>
            <Box component='section'>
                <Top my={40} title='Shopping Cart' href='/products' linkLabel='Back to the store' />

                {/* Показать пустую корзину, если товаров нет */}
                {!count && <CartEmpty />}

                <Group gap={32} align='start'>
                    {/* Перебор и отображение товаров в корзине */}
                    {products?.map((product) => (
                        <CartProduct
                            {...product} // Данные о товаре
                            key={product.id}
                            increment={product.count ?? 1} // Количество товара
                            setDecrement={() => dispatch(CartModel.actions.removeCurrentProduct(product.id))} // Уменьшение количества товара
                            setIncrement={() =>
                                dispatch(
                                    CartModel.actions.addProductToCart({ ...product, count: (product.count ?? 0) + 1 }) // Увеличение количества товара
                                )
                            }
                            removeAllProducts={() =>
                                dispatch(CartModel.actions.removeAllSameProductsFromCart(product.id)) // Удаление всех единиц данного товара
                            }
                        />
                    ))}

                    {/* Бумажная панель с формой заказа и итогом, скрывается, если корзина пустая */}
                    <Paper w='100%' maw={548} bg='gray.1' p={32} radius='sm' display={count === 0 ? 'none' : 'block'}>
                        <OrderDetails count={count} total={total} /> {/* Итоговая информация о заказе (количество товаров и сумма) */}

                        {/* Форма заказа */}
                        <Box
                            component='form'
                            onSubmit={form.onSubmit(
                                (values) => {
                                    open(); // Открыть модальное окно успешного оформления заказа
                                    // Для тестирования отправки данных, в настоящий момент просто выводятся в консоль
                                    // eslint-disable-next-line no-console
                                    console.log({ values });
                                },
                                (errors) => {
                                    // Вывод ошибок валидации в консоль (для тестирования)
                                    // eslint-disable-next-line no-console
                                    console.log(errors);
                                }
                            )}
                        >
                            <Stack gap={16}>
                                {/* Поле ввода имени покупателя */}
                                <TextInput
                                    size='lg'
                                    placeholder='Name'
                                    key={form.key('name')}
                                    {...form.getInputProps('name')}
                                />
                                {/* Поле ввода номера телефона */}
                                <TextInput
                                    size='lg'
                                    placeholder='Phone number'
                                    key={form.key('phone')}
                                    {...form.getInputProps('phone')}
                                />
                                {/* Поле ввода электронной почты */}
                                <TextInput
                                    size='lg'
                                    placeholder='Email'
                                    key={form.key('email')}
                                    {...form.getInputProps('email')}
                                />
                                {/* Кнопка отправки заказа, меняющая оформление после успешного заказа */}
                                <Button
                                    type='submit'
                                    mt={16}
                                    bg={opened ? 'white' : 'green'}
                                    c={opened ? 'green' : 'white'}
                                    size='lg'
                                >
                                    {opened ? 'The order is Placed' : 'Order'}
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Group>
            </Box>

            {/* Модальное окно успешного оформления заказа */}
            <SuccessModal close={close} opened={opened} />
        </>
    );
};