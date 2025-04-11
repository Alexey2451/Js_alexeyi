import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children, fallback } = this.props;
        if (hasError) {
            if (!fallback) {
                return <Suspense fallback='Something went wrong'>{/*<PageError/>*/}</Suspense>;
            }

            return this.props.fallback;
        }

        return children;
    }
}
