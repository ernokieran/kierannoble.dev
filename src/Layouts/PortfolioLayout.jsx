import { Suspense, useContext } from "react";
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Header, Footer, Loader, Error } from '../Components/Layout';
import { ProjectContext } from '../Context';

function PortfolioLayout() {
    const { project } = useContext(ProjectContext);

    return (
        <div className={`container ${project}`}>
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