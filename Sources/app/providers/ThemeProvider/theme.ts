import { Container, createTheme, Modal } from '@mantine/core';

export const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    primaryColor: 'green',
    headings: {
        fontFamily: 'Montserrat',
    },
    spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '40px',
    },
    radius: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '40px',
    },
    components: {
        Container: Container.extend({
            vars: () => ({
                root: {
                    '--container-size': '1392px',
                },
            }),
        }),
        Modal: Modal.extend({
            styles: {
                header: {
                    fontFamily: 'Montserrat',
                },
            },
        }),
    },
});
