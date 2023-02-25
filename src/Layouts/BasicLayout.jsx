import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer, Loader, Error } from '~/Components/Layout';


function BasicLayout() {
    return (
        <div className="container home">
            <div className="layout layout--portfolio">
                <Header />
                <main>
                    <ErrorBoundary fallback={<Error />}>
                        <Suspense fallback={<Loader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default BasicLayout