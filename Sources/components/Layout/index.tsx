import type { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from './ui';

interface RootLayoutProps {
    title?: string;
}

export const RootLayout = ({ title, children }: PropsWithChildren<RootLayoutProps>) => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{title ?? 'React App'}</title>
            </Helmet>
            <Header />
            <main>{children}</main>
        </>
    );
};
