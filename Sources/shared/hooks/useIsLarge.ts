import { useMediaQuery } from '@mantine/hooks';

export const useIsLarge = () => useMediaQuery('(min-width: 730px)');
