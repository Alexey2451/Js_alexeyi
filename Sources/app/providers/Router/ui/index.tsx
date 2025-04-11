import { Suspense } from 'react';
import { RouterProvider } from 'react-router';

import { routerConfig } from '@/shared/config/routerConfig';
import { PageLoader } from '@/shared/ui';

export function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={routerConfig} />
        </Suspense>
    );
}
