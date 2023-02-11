import { Suspense, useContext } from "react";
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './Components/Layout';
import { ProjectContext } from './Context';

function BaseLayout() {
    const { project } = useContext(ProjectContext);

    return (
        <div className={`container ${project}`}>
            <div className="layout layout--portfolio">
                <Header />
                <main>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </main>
                <Footer />
            </div>
        </div >
    )
}

export default BaseLayout