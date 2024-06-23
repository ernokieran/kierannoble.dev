import { Suspense, useContext } from "react";
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer, Loader, Error } from '@/Components/Layout';
import { ViewportContext, ProjectContext } from '@/Context';

function PortfolioLayout() {
    const { project } = useContext(ProjectContext);
    const { viewportHeight, viewportWidth } = useContext(ViewportContext);

    return (
        <div className={`container ${project}`} style={{ '--vh': viewportHeight, '--vw': viewportWidth }} >
            <div className="layout layout--portfolio">
                <Header includeCV="true" />
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
    )
}

export default PortfolioLayout