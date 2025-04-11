import type { PropsWithChildren } from 'react';
import { MantineProvider as Provider } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

import { theme } from './theme';

import '.././../styles/index.css';

export function ThemeProvider({ children }: PropsWithChildren) {
    return (
        <Provider theme={theme}>
            <NavigationProgress />
            {children}
        </Provider>
    );
}
